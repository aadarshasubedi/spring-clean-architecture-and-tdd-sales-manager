package io.github.devbhuwan.sales.domain.model.usecase.registernewcompany;

import io.github.devbhuwan.core.usecase.Request;
import io.github.devbhuwan.sales.domain.model.validation.constraint.Capitalized;
import lombok.Data;
import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class RegisterNewCompanyRequest implements Request {

    @NotNull
    @NotBlank
    @Size(max = 20)
    @Capitalized
    private final String name;
}