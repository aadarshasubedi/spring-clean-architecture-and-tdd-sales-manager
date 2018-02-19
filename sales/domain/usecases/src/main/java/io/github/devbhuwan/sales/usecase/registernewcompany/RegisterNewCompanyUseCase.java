package io.github.devbhuwan.sales.usecase.registernewcompany;

import io.github.devbhuwan.core.usecase.UseCase;
import io.github.devbhuwan.sales.gateway.CompaniesGateway;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.validation.Validator;

import static io.github.devbhuwan.sales.validation.DomainValidatorUtils.throwDomainNotValidExceptionIfEntityNotValid;

@RequiredArgsConstructor
@Component
public class RegisterNewCompanyUseCase implements UseCase<RegisterNewCompanyRequest> {

    private final ToCompanyMapper mapper;
    private final CompaniesGateway companiesGateway;
    private final Validator validator;

    @Override
    public void execute(RegisterNewCompanyRequest request) {
        throwDomainNotValidExceptionIfEntityNotValid(request, validator);
        companiesGateway.persistNew(mapper.toCompany(request));
    }

}
