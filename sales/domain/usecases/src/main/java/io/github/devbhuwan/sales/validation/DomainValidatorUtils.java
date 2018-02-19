package io.github.devbhuwan.sales.validation;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import java.util.Set;

import static io.github.devbhuwan.sales.validation.DomainViolation.convertToViolations;

public class DomainValidatorUtils {

    public static <T> void throwDomainNotValidExceptionIfEntityNotValid(T domain, Validator validator) throws DomainNotValidException {
        Set<ConstraintViolation<T>> violations = validator.validate(domain);
        if (!violations.isEmpty())
            throw new DomainNotValidException(convertToViolations(violations));
    }
}
