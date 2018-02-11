package io.github.devbhuwan.sales.domain.model.usecase.registernewcompany;

import io.github.devbhuwan.core.usecase.UseCase;
import io.github.devbhuwan.sales.domain.model.gateway.CompaniesGateway;
import lombok.RequiredArgsConstructor;

import javax.validation.Validator;

import static io.github.devbhuwan.sales.domain.model.validation.DomainValidatorUtils.throwExceptionIfValidationNotSuccessful;

@RequiredArgsConstructor
public class RegisterNewCompanyUseCase implements UseCase<RegisterNewCompanyRequest, RegisterNewCompanyResponse> {

    private final ToCompanyMapper mapper;
    private final CompaniesGateway companiesGateway;
    private final Validator validator;

    @Override
    public void execute(RegisterNewCompanyRequest request, RegisterNewCompanyResponse response) {
        throwExceptionIfValidationNotSuccessful(request, validator);
        companiesGateway.persistNew(mapper.toCompany(request));
    }

}
