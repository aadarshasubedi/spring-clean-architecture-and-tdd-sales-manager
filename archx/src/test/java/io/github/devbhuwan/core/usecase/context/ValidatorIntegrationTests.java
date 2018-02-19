package io.github.devbhuwan.core.usecase.context;

import io.github.devbhuwan.core.usecase.UseCase;
import io.github.devbhuwan.core.usecase.UseCaseTestsConfig;
import io.github.devbhuwan.core.usecase.domain.AddPersonRequest;
import io.github.devbhuwan.core.usecase.domain.AddPersonUseCase;
import io.github.devbhuwan.core.usecase.domain.PersonRequestValidator;
import io.github.devbhuwan.core.usecase.event.BeforeExecuteEvent;
import io.github.devbhuwan.core.usecase.event.UseCaseConstraintViolationException;
import io.github.devbhuwan.core.usecase.event.ValidatingUseCaseEventListener;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.ObjectFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration
public class ValidatorIntegrationTests {

    @Autowired
    ConfigurableApplicationContext context;

    @Test(expected = UseCaseConstraintViolationException.class)
    public void shouldValidateLastName() {
        context.publishEvent(new BeforeExecuteEvent(new AddPersonRequest("Dave", "")));
    }

    @Configuration
    @Import({UseCaseTestsConfig.class})
    static class ValidatorTestsConfig {

        @Bean
        public ValidatingUseCaseEventListener validatingListener(ObjectFactory<UseCase> useCases) {

            ValidatingUseCaseEventListener listener = new ValidatingUseCaseEventListener(useCases);
            listener.addValidator("beforeExecute", new PersonRequestValidator());

            return listener;
        }

        @Bean
        public AddPersonUseCase addPersonUseCase() {
            return new AddPersonUseCase();
        }
    }
}

