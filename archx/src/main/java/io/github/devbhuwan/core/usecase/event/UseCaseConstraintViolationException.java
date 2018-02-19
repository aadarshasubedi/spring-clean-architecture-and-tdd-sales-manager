package io.github.devbhuwan.core.usecase.event;

import org.springframework.validation.Errors;

public class UseCaseConstraintViolationException extends RuntimeException {
    public UseCaseConstraintViolationException(Errors errors) {
    }
}
