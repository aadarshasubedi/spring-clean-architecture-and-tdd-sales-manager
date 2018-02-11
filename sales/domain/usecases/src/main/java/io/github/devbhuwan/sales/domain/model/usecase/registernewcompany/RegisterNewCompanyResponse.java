package io.github.devbhuwan.sales.domain.model.usecase.registernewcompany;

import io.github.devbhuwan.core.usecase.Response;

public interface RegisterNewCompanyResponse extends Response {
    RegisterNewCompanyResponse EMPTY = new RegisterNewCompanyResponse() {
    };
}
