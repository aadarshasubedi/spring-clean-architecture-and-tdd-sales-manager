package io.github.devbhuwan.sales.usecase.registernewcompany;

import io.github.devbhuwan.core.usecase.RequestValidator;
import io.github.devbhuwan.core.usecase.annotation.HandleBeforeExecute;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

@Component
@HandleBeforeExecute
public class RegisterNewCompanyRequestValidator extends RequestValidator<RegisterNewCompanyRequest> {

    @Override
    public void validateTarget(RegisterNewCompanyRequest target, Errors errors) {

    }

}
