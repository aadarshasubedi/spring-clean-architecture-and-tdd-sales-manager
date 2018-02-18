package io.github.devbhuwan.sales.usecase.registernewcompany;

import io.github.devbhuwan.core.usecase.UseCase;
import io.github.devbhuwan.sales.gateway.CompaniesGateway;
import io.github.devbhuwan.sales.validation.DomainValidatorUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.validation.Validator;

@RequiredArgsConstructor
@Component
public class RegisterNewCompanyUseCase implements UseCase<RegisterNewCompanyRequest> {

    private final ToCompanyMapper mapper;
    private final CompaniesGateway companiesGateway;
    private final Validator validator;

    @Override
    public void execute(RegisterNewCompanyRequest request) {
        DomainValidatorUtils.throwExceptionIfValidationNotSuccessful(request, validator);
        companiesGateway.persistNew(mapper.toCompany(request));
    }

}
