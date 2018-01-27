package io.github.devbhuwan.sales.domain.model.usecase.registernewcompany;

import io.github.devbhuwan.core.usecase.Response;
import io.github.devbhuwan.sales.domain.model.validation.DomainViolation;

public interface RegisterNewCompanyResponse extends Response {
    void setViolations(Iterable<DomainViolation> violations);
}
