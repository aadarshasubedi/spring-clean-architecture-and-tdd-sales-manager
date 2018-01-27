package io.github.devbhuwan.sales.domain.model.validation.validator;

import io.github.devbhuwan.sales.domain.model.validation.constraint.Capitalized;

import javax.validation.ConstraintValidator;

public interface CapitalizedValidator extends ConstraintValidator<Capitalized, String> {
}
