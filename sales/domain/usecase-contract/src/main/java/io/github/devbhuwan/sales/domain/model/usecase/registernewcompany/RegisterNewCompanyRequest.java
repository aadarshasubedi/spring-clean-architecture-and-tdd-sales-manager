package io.github.devbhuwan.sales.domain.model.usecase.registernewcompany;

import io.github.devbhuwan.core.usecase.Request;
import io.github.devbhuwan.sales.domain.model.validation.constraint.Mandatory;
import lombok.Data;

@Data
public class RegisterNewCompanyRequest implements Request {

    @Mandatory
    private String name;
    @Mandatory
    private String address;
    @Mandatory
    private String contactPerson;
    @Mandatory
    private String country;
    private String stateCode;
    @Mandatory
    private String telephone;
    private String email;
    @Mandatory
    private Integer beginningOfYear;
}
