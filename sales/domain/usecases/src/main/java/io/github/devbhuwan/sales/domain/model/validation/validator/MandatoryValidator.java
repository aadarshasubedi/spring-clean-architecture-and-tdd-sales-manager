package io.github.devbhuwan.sales.domain.model.validation.validator;

import io.github.devbhuwan.sales.domain.model.validation.constraint.Mandatory;
import org.apache.commons.lang3.StringUtils;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class MandatoryValidator implements ConstraintValidator<Mandatory, Object> {

    @Override
    public void initialize(Mandatory constraint) {
    }

    @Override
    public boolean isValid(Object obj, ConstraintValidatorContext context) {
        return obj != null && (!(obj instanceof String) || StringUtils.isNotBlank((String) obj));
    }

}
