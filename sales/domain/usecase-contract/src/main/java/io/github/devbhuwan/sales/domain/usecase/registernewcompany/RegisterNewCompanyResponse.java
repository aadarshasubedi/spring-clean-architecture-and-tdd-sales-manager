package io.github.devbhuwan.sales.domain.usecase.registernewcompany;

import io.github.devbhuwan.core.usecase.Response;

public interface RegisterNewCompanyResponse extends Response {
    void setViolations(Iterable<RegisterNewCompanyResponseModel.Violation> violations);

    boolean isSuccessful();
}
