package io.github.devbhuwan.sales.dataproviders.database.company;


import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
abstract class DatabaseEntity {

    @Id
    private String id;
}
