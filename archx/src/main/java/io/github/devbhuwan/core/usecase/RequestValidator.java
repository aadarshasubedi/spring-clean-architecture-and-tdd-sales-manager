package io.github.devbhuwan.core.usecase;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import static org.springframework.util.ClassUtils.isAssignable;

public abstract class RequestValidator<T> implements Validator {

    @Override
    public boolean supports(Class<?> clazz) {
        return isAssignable(clazz, getClass());
    }

    @Override
    public void validate(Object target, Errors errors) {
        this.validateTarget((T) target, errors);
    }

    public abstract void validateTarget(T target, Errors errors);
}
