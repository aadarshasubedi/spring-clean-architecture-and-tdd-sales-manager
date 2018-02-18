package io.github.devbhuwan.sales.entity;

import lombok.Data;

@Data
public class Company implements Entity {

    private String name;
    private String address;
    private String contactPerson;
    private String country;
    private String stateCode;
    private String telephone;
    private String email;
    private Integer beginningOfYear;

}
