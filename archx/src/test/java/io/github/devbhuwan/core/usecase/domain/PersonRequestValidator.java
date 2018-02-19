package io.github.devbhuwan.core.usecase.domain;

import io.github.devbhuwan.core.usecase.annotation.HandleBeforeExecute;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import static org.springframework.util.ClassUtils.isAssignable;
import static org.springframework.util.StringUtils.hasText;

@Component
@HandleBeforeExecute
public class PersonRequestValidator implements Validator {

    @Override
    public boolean supports(Class<?> clazz) {
        return isAssignable(clazz, AddPersonRequest.class);
    }

    @Override
    public void validate(Object target, Errors errors) {
        AddPersonRequest p = (AddPersonRequest) target;
        if (!hasText(p.getLastName())) {
            errors.rejectValue("lastName", "blank", "Last name cannot be blank");
        }
    }

}
