package io.github.devbhuwan.sales.domain.model.validation.validator;

import io.github.devbhuwan.sales.domain.model.validation.constraint.Capitalized;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class CapitalizedValidator implements ConstraintValidator<Capitalized, String> {

    @Override
    public void initialize(Capitalized constraintAnnotation) {
    }

    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
        return false;
    }
}
