package io.github.devbhuwan.sales.dataproviders.database.company;

import io.github.devbhuwan.sales.entity.Company;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CompanyDatabaseEntityMapper {

    Company toDomain(CompanyDatabaseEntity entity);

    CompanyDatabaseEntity toEntity(Company domain);

    List<Company> toCompanies(Iterable<CompanyDatabaseEntity> databaseEntities);

}
