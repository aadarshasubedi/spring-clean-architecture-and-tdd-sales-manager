package io.github.devbhuwan.sales.domain.entrypoints;

import io.github.devbhuwan.sales.domain.usecase.registernewcompany.RegisterNewCompanyResponse;
import io.github.devbhuwan.sales.domain.usecase.registernewcompany.RegisterNewCompanyResponseModel.Violation;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;

public class RegisterNewCompanyResponseRepresentation implements RegisterNewCompanyResponse {

    private Collection<Violation> violations = Collections.emptyList();

    @Override
    public void setViolations(Iterable<Violation> violations) {
        this.violations = (Collection<Violation>) violations;
    }

    @Override
    public boolean isSuccessful() {
        return !Optional.ofNullable(violations).isPresent();
    }

}
