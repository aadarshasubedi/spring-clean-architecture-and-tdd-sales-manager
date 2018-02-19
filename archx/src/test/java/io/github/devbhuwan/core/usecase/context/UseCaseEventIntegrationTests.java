package io.github.devbhuwan.core.usecase.context;

import io.github.devbhuwan.core.usecase.UseCaseTestsConfig;
import io.github.devbhuwan.core.usecase.domain.*;
import io.github.devbhuwan.core.usecase.event.AfterExecuteEvent;
import io.github.devbhuwan.core.usecase.event.AnnotatedEventHandlerInvoker;
import io.github.devbhuwan.core.usecase.event.BeforeExecuteEvent;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration
public class UseCaseEventIntegrationTests {
    @Autowired
    ApplicationContext appCtx;
    @Autowired
    AddPersonUseCase addPersonUseCase;
    private AddPersonRequest addPersonRequest;

    @Before
    public void setup() {
        addPersonRequest = new AddPersonRequest("Jane", "Doe");
        addPersonUseCase.execute(addPersonRequest);
    }

    @Test(expected = EventHandlerInvokedException.class)
    public void shouldDispatchBeforeExecute() {
        appCtx.publishEvent(new BeforeExecuteEvent(addPersonRequest));
    }

    @Test(expected = EventHandlerInvokedException.class)
    public void shouldDispatchAfterExecute() {
        appCtx.publishEvent(new AfterExecuteEvent(addPersonRequest));
    }

    @Configuration
    @Import({UseCaseTestsConfig.class})
    static class UseCaseEventTestsConfig {

        @Bean
        public static AnnotatedEventHandlerInvoker annotatedEventHandlerInvoker() {
            return new AnnotatedEventHandlerInvoker();
        }

        @Bean
        public AddPersonUseCaseEventHandler personBeforeSaveHandler() {
            return new AddPersonUseCaseEventHandler();
        }

        @Bean
        public AnnotatedAddPersonUseCaseEventHandler beforeSaveHandler() {
            return new AnnotatedAddPersonUseCaseEventHandler();
        }

        @Bean
        public AddPersonUseCase addPersonUseCase() {
            return new AddPersonUseCase();
        }
    }
}
