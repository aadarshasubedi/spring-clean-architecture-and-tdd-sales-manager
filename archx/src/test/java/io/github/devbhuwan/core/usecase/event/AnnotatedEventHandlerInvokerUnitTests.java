package io.github.devbhuwan.core.usecase.event;

import io.github.devbhuwan.core.usecase.annotation.HandleBeforeExecute;
import io.github.devbhuwan.core.usecase.event.AnnotatedEventHandlerInvoker.EventHandlerMethod;
import org.junit.jupiter.api.Test;
import org.springframework.aop.framework.ProxyFactory;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.util.MultiValueMap;

import static org.assertj.core.api.Assertions.assertThat;

class AnnotatedEventHandlerInvokerUnitTests {

    @SuppressWarnings("unchecked")
    @Test
    public void doesNotDiscoverMethodsOnProxyClasses() {
        ProxyFactory factory = new ProxyFactory();
        factory.setTarget(new Sample());
        factory.setProxyTargetClass(true);

        AnnotatedEventHandlerInvoker invoker = new AnnotatedEventHandlerInvoker();
        invoker.postProcessAfterInitialization(factory.getProxy(), "proxy");

        MultiValueMap<Class<? extends UseCaseEvent>, EventHandlerMethod> methods = (MultiValueMap<Class<? extends UseCaseEvent>, EventHandlerMethod>)
                ReflectionTestUtils.getField(invoker, "handlerMethods");
        assertThat(methods.get(BeforeExecuteEvent.class)).hasSize(1);
    }

    @UseCaseEventHandler
    static class Sample {

        @HandleBeforeExecute
        public void method(Sample sample) {
        }
    }


}