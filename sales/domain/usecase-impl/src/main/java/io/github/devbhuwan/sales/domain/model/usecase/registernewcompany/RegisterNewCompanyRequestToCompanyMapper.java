package io.github.devbhuwan.sales.domain.model.usecase.registernewcompany;

import io.github.devbhuwan.sales.domain.model.entity.Company;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
interface RegisterNewCompanyRequestToCompanyMapper {
    Company toCompany(RegisterNewCompanyRequest request);
}
