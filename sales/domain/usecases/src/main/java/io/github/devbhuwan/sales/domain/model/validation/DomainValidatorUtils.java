package io.github.devbhuwan.sales.domain.model.validation;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import java.util.Set;

public class DomainValidatorUtils {

    public static <T> void throwExceptionIfValidationNotSuccessful(T domain, Validator validator) throws DomainNotValidException {
        Set<ConstraintViolation<T>> violations = validator.validate(domain);
        if (!violations.isEmpty())
            throw new DomainNotValidException(DomainViolation.convertToViolations(violations));
    }
}
