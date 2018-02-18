package io.github.devbhuwan.sales.usecase.registernewcompany;

import io.github.devbhuwan.core.usecase.Request;
import io.github.devbhuwan.sales.validation.constraint.Mandatory;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
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
