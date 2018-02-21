package io.github.devbhuwan.core.usecase.config;

import io.github.devbhuwan.core.usecase.RequestValidator;
import io.github.devbhuwan.core.usecase.UseCase;
import io.github.devbhuwan.core.usecase.annotation.HandleAfterExecute;
import io.github.devbhuwan.core.usecase.annotation.HandleBeforeExecute;
import io.github.devbhuwan.core.usecase.event.AnnotatedEventHandlerInvoker;
import io.github.devbhuwan.core.usecase.event.ValidatingUseCaseEventListener;
import org.springframework.beans.factory.BeanClassLoaderAware;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.ObjectFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.validation.Validator;

import java.util.*;

@Configuration
public class UseCaseRunnerConfiguration implements InitializingBean, BeanClassLoaderAware {

    @Autowired(required = false)
    private List<UseCaseConfigurer> configurers = Collections.emptyList();
    private UseCaseConfigurerDelegate configurerDelegate;
    private ClassLoader beanClassLoader;
    @Autowired(required = false)
    private List<RequestValidator<?>> validators = Collections.emptyList();

    @Bean
    public static AnnotatedEventHandlerInvoker annotatedEventHandlerInvoker() {
        return new AnnotatedEventHandlerInvoker();
    }

    @Override
    public void setBeanClassLoader(ClassLoader classLoader) {
        this.beanClassLoader = classLoader;
    }

    @Override
    public void afterPropertiesSet() {
        configurerDelegate = new UseCaseConfigurerDelegate(configurers);
    }

    @Bean
    public ValidatingUseCaseEventListener validatingRepositoryEventListener(
            ObjectFactory<UseCase<?>> useCases) {

        ValidatingUseCaseEventListener listener = new ValidatingUseCaseEventListener(useCases);
        Map<String, Collection<Validator>> validatorMap = new LinkedHashMap<>();

        Collection<Validator> beforeExecuteValidators = new ArrayList<>();
        Collection<Validator> afterExecuteValidators = new ArrayList<>();
        for (Validator validator : validators) {
            if (AnnotationUtils.findAnnotation(validator.getClass(), HandleBeforeExecute.class) != null) {
                beforeExecuteValidators.add(validator);
            }
            if (AnnotationUtils.findAnnotation(validator.getClass(), HandleAfterExecute.class) != null) {
                afterExecuteValidators.add(validator);
            }
        }
        validatorMap.put("beforeExecute", beforeExecuteValidators);
        validatorMap.put("afterExecute", beforeExecuteValidators);
        listener.setValidators(validatorMap);

        configurerDelegate.configureValidatingUseCaseEventListener(listener);
        return listener;
    }
}
