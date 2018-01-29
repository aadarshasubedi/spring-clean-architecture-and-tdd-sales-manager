package io.github.devbhuwan.sales.domain.entrypoints;

import io.github.devbhuwan.sales.domain.model.usecase.registernewcompany.RegisterNewCompanyResponse;
import io.github.devbhuwan.sales.domain.model.validation.DomainViolation;

import java.util.Collection;
import java.util.Collections;
import java.util.Set;

public class RegisterNewCompanyResponseRepresentation implements RegisterNewCompanyResponse {

    private Collection<DomainViolation> violations = Collections.emptyList();

    @Override
    public void setViolations(Set<DomainViolation> violations) {
        this.violations = violations;
    }

}
