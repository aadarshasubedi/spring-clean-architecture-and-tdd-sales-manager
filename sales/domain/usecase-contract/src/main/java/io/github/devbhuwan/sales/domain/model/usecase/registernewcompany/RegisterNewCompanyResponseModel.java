package io.github.devbhuwan.sales.domain.model.usecase.registernewcompany;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

public interface RegisterNewCompanyResponseModel {
    @RequiredArgsConstructor
    @Getter
    class Violation {
        private final Object path;
        private final String message;
    }
}
