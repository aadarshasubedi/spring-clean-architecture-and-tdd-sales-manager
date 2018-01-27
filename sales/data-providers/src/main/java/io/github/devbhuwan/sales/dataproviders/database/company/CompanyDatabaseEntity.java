package io.github.devbhuwan.sales.dataproviders.database.company;

import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
class CompanyDatabaseEntity extends DatabaseEntity {
    private String name;
    private String address;
    private String contactPerson;
    private String country;
    private String stateCode;
    private String telephone;
    private String email;
    private Integer beginningOfYear;
}
