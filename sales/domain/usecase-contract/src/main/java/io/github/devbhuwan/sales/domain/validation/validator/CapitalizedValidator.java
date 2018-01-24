package io.github.devbhuwan.sales.domain.validation.validator;

import io.github.devbhuwan.sales.domain.validation.constraint.Capitalized;

import javax.validation.ConstraintValidator;

public interface CapitalizedValidator extends ConstraintValidator<Capitalized, String> {
}
