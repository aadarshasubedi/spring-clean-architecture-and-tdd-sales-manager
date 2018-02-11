package io.github.devbhuwan.sales.domain.model.usecase.registernewcompany;

import io.github.devbhuwan.sales.domain.model.entity.Company;
import org.mapstruct.Mapper;

@Mapper(componentModel = ToCompanyMapper.MAPPER_DEFAULT_COMPONENT_MODEL)
interface ToCompanyMapper {

    String MAPPER_DEFAULT_COMPONENT_MODEL = "spring";

    Company toCompany(RegisterNewCompanyRequest request);
}
