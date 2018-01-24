package io.github.devbhuwan.sales.domain.usecase.registernewcompany;

import io.github.devbhuwan.sales.domain.validation.constraint.Capitalized;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import org.hibernate.validator.constraints.NotBlank;

public interface RegisterNewCompanyRequestModel {
    @RequiredArgsConstructor
    @Getter
    @ToString
    class Name {
        @NotBlank
        @Capitalized
        private final String name;
    }
}
