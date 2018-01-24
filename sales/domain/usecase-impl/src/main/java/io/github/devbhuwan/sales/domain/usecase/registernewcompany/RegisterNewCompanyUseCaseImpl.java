package io.github.devbhuwan.sales.domain.usecase.registernewcompany;

import io.github.devbhuwan.sales.domain.model.entity.Company;
import io.github.devbhuwan.sales.domain.model.gateway.CompaniesGateway;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static io.github.devbhuwan.sales.domain.usecase.registernewcompany.RegisterNewCompanyResponseModel.Violation;

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
            Company company = mapper.asCompany(request);
            companiesGateway.persistNew(company);
        } else {
            response.setViolations(toResponseModel(violations));
        }
    }

    private Iterable<Violation> toResponseModel(Iterable<ConstraintViolation<RegisterNewCompanyRequest>> violations) {
        return StreamSupport.stream(violations.spliterator(), false)
                .map(this::toViolation)
                .collect(Collectors.toSet());
    }

    private Violation toViolation(ConstraintViolation<RegisterNewCompanyRequest> violation) {
        return new Violation(violation.getPropertyPath(), violation.getMessage());
    }

}
