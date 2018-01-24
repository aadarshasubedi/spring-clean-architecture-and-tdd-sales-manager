package io.github.devbhuwan.sales.domain.usecase.registernewcompany;

import io.github.devbhuwan.core.usecase.Request;
import io.github.devbhuwan.sales.domain.validation.constraint.Capitalized;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@RequiredArgsConstructor
@Getter
@Builder
@ToString
public class RegisterNewCompanyRequest implements Request {
    @NotNull
    @NotBlank
    @Size(max = 20)
    @Capitalized
    private final String name;
}
