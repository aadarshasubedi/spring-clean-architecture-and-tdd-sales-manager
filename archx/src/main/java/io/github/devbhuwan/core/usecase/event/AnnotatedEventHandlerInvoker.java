package io.github.devbhuwan.core.usecase.event;

import io.github.devbhuwan.core.usecase.annotation.HandleAfterExecute;
import io.github.devbhuwan.core.usecase.annotation.HandleBeforeExecute;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.context.ApplicationListener;
import org.springframework.core.ResolvableType;
import org.springframework.core.annotation.AnnotationAwareOrderComparator;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.util.ClassUtils;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.ReflectionUtils;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Slf4j
public class AnnotatedEventHandlerInvoker implements ApplicationListener<UseCaseEvent>, BeanPostProcessor {

    private static final String PARAMETER_MISSING = "Invalid event handler method %s! At least a single argument is required to determine the domain type for which you are interested in events.";

    private final MultiValueMap<Class<? extends UseCaseEvent>, EventHandlerMethod> handlerMethods = new LinkedMultiValueMap<>();

    @Override
    public void onApplicationEvent(UseCaseEvent event) {

        Class<? extends UseCaseEvent> eventType = event.getClass();

        if (!handlerMethods.containsKey(eventType)) {
            return;
        }

        for (EventHandlerMethod handlerMethod : handlerMethods.get(eventType)) {

            Object src = event.getSource();

            if (!ClassUtils.isAssignable(handlerMethod.targetType, src.getClass())) {
                continue;
            }

            List<Object> parameters = new ArrayList<Object>();
            parameters.add(src);

            if (log.isDebugEnabled()) {
                log.debug("Invoking {} handler for {}.", event.getClass().getSimpleName(), event.getSource());
            }

            ReflectionUtils.invokeMethod(handlerMethod.method, handlerMethod.handler, parameters.toArray());
        }
    }

    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        return bean;
    }

    @Override
    public Object postProcessAfterInitialization(final Object bean, String beanName) throws BeansException {

        Class<?> beanType = ClassUtils.getUserClass(bean);
        UseCaseEventHandler typeAnno = AnnotationUtils.findAnnotation(beanType, UseCaseEventHandler.class);

        if (typeAnno == null) {
            return bean;
        }

        for (Method method : ReflectionUtils.getUniqueDeclaredMethods(beanType)) {

            inspect(bean, method, HandleBeforeExecute.class, BeforeExecuteEvent.class);
            inspect(bean, method, HandleAfterExecute.class, AfterExecuteEvent.class);
        }

        return bean;
    }

    private <T extends Annotation> void inspect(Object handler, Method method, Class<T> annotationType,
                                                Class<? extends UseCaseEvent> eventType) {

        T annotation = AnnotationUtils.findAnnotation(method, annotationType);

        if (annotation == null) {
            return;
        }

        if (method.getParameterCount() == 0) {
            throw new IllegalStateException(String.format(PARAMETER_MISSING, method));
        }

        ResolvableType parameter = ResolvableType.forMethodParameter(method, 0, handler.getClass());
        EventHandlerMethod handlerMethod = EventHandlerMethod.of(parameter.resolve(), handler, method);

        if (log.isDebugEnabled()) {
            log.debug("Annotated handler method found: {}", handlerMethod);
        }

        List<EventHandlerMethod> events = handlerMethods.get(eventType);

        if (events == null) {
            events = new ArrayList<EventHandlerMethod>();
        }

        if (events.isEmpty()) {
            handlerMethods.add(eventType, handlerMethod);
            return;
        }

        events.add(handlerMethod);
        Collections.sort(events);
        handlerMethods.put(eventType, events);
    }

    @ToString
    @EqualsAndHashCode
    @RequiredArgsConstructor
    static class EventHandlerMethod implements Comparable<EventHandlerMethod> {

        final Class<?> targetType;
        final Method method;
        final Object handler;

        public static EventHandlerMethod of(Class<?> targetType, Object handler, Method method) {

            ReflectionUtils.makeAccessible(method);
            return new EventHandlerMethod(targetType, method, handler);
        }

        @Override
        public int compareTo(EventHandlerMethod o) {
            return AnnotationAwareOrderComparator.INSTANCE.compare(this.method, o.method);
        }
    }
}