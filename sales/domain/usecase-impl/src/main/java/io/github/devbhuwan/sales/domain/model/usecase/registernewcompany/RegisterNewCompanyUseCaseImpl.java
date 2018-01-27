package io.github.devbhuwan.sales.domain.model.usecase.registernewcompany;

import io.github.devbhuwan.sales.domain.model.entity.Company;
import io.github.devbhuwan.sales.domain.model.gateway.CompaniesGateway;
import io.github.devbhuwan.sales.domain.model.validation.DomainViolation;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;


class RegisterNewCompanyUseCaseImpl implements RegisterNewCompanyUseCase {

    private final Validator validator;
    private final RegisterNewCompanyRequestToCompanyMapper mapper;
    private final CompaniesGateway companiesGateway;

    public RegisterNewCompanyUseCaseImpl(Validator validator, RegisterNewCompanyRequestToCompanyMapper mapper, CompaniesGateway companiesGateway) {
        this.validator = validator;
        this.mapper = mapper;
        this.companiesGateway = companiesGateway;
    }

    @Override
    public void execute(RegisterNewCompanyRequest request, RegisterNewCompanyResponse response) {
        Set<ConstraintViolation<RegisterNewCompanyRequest>> violations = validator.validate(request);
        if (violations.isEmpty()) {
            Company company = mapper.toCompany(request);
            companiesGateway.persistNew(company);
        } else {
            response.setViolations(toViolations(violations));
        }
    }

    private Iterable<DomainViolation> toViolations(Iterable<ConstraintViolation<RegisterNewCompanyRequest>> violations) {
        return StreamSupport.stream(violations.spliterator(), false).map(this::toViolation)
                .collect(Collectors.toSet());
    }

    private DomainViolation toViolation(ConstraintViolation<RegisterNewCompanyRequest> violation) {
        return new DomainViolation(violation.getPropertyPath(), violation.getMessage());
    }

}
