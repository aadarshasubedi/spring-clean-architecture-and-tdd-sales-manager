package io.github.devbhuwan.sales.domain.model.usecase.registernewcompany;

import io.github.devbhuwan.core.usecase.UseCase;
import io.github.devbhuwan.sales.domain.model.gateway.CompaniesGateway;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.validation.Validator;

import static io.github.devbhuwan.sales.domain.model.validation.DomainValidatorUtils.throwExceptionIfValidationNotSuccessful;

@RequiredArgsConstructor
@Component
public class RegisterNewCompanyUseCase implements UseCase<RegisterNewCompanyRequest> {

    private final ToCompanyMapper mapper;
    private final CompaniesGateway companiesGateway;
    private final Validator validator;

    @Override
    public void execute(RegisterNewCompanyRequest request) {
        throwExceptionIfValidationNotSuccessful(request, validator);
        companiesGateway.persistNew(mapper.toCompany(request));
    }

}
