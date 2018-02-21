package io.github.devbhuwan.core.usecase.event;

import io.github.devbhuwan.core.usecase.UseCase;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.ObjectFactory;
import org.springframework.util.Assert;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Map;

@Slf4j
public class ValidatingUseCaseEventListener extends AbstractUseCaseEventListener<Object> {

    private final ObjectFactory<UseCase<?>> useCasesFactory;
    private final MultiValueMap<String, Validator> validators;

    public ValidatingUseCaseEventListener(ObjectFactory<UseCase<?>> useCasesFactory) {

        Assert.notNull(useCasesFactory, "UseCases must not be null!");

        this.useCasesFactory = useCasesFactory;
        this.validators = new LinkedMultiValueMap<>();
    }

    public ValidatingUseCaseEventListener setValidators(Map<String, Collection<Validator>> validators) {

        for (Map.Entry<String, Collection<Validator>> entry : validators.entrySet()) {
            this.validators.put(entry.getKey(), new ArrayList<>(entry.getValue()));
        }

        return this;
    }

    public ValidatingUseCaseEventListener addValidator(String event, Validator validator) {
        validators.add(event, validator);
        return this;
    }


    @Override
    protected void onBeforeExecute(Object entity) {
        validate("beforeExecute", entity);
    }

    @Override
    protected void onAfterExecute(Object entity) {
        validate("afterExecute", entity);
    }

    private Errors validate(String event, Object entity) {

        if (entity == null) {
            return null;
        }

        Errors errors = new ValidationErrors(entity);

        for (Validator validator : getValidatorsForEvent(event)) {

            if (validator.supports(entity.getClass())) {
                log.debug("{}: {} with {}", event, entity, validator);
                ValidationUtils.invokeValidator(validator, entity, errors);
            }
        }

        if (errors.hasErrors()) {
            throw new UseCaseConstraintViolationException(errors);
        }

        return errors;
    }

    private Collection<Validator> getValidatorsForEvent(String event) {

        Collection<Validator> validators = this.validators.get(event);
        return validators == null ? Collections.emptySet() : validators;
    }
}