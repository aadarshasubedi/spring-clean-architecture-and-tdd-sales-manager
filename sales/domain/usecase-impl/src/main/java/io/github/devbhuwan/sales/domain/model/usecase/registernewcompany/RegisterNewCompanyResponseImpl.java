package io.github.devbhuwan.sales.domain.model.usecase.registernewcompany;

import io.github.devbhuwan.sales.domain.model.validation.DomainViolation;

import java.util.HashSet;
import java.util.Set;

class RegisterNewCompanyResponseImpl implements RegisterNewCompanyResponse {

    private Set<DomainViolation> violations = new HashSet<>();

    @Override
    public void setViolations(Set<DomainViolation> violations) {
        this.violations = violations;
    }
}
