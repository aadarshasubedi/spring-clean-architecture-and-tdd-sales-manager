package io.github.devbhuwan.sales.dataproviders.database.company;

import io.github.devbhuwan.sales.domain.model.entity.Company;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CompanyDatabaseEntityMapper {

    Company toDomain(CompanyDatabaseEntity entity);

    CompanyDatabaseEntity toEntity(Company domain);

}
