package io.github.devbhuwan.sales.domain.model.usecase.registernewcompany;

import io.github.devbhuwan.core.usecase.Response;
import io.github.devbhuwan.sales.domain.model.validation.DomainViolation;

import java.util.Set;

public interface RegisterNewCompanyResponse extends Response {
    void setViolations(Set<DomainViolation> violations);
}
