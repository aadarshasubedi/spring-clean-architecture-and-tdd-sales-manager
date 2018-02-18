package io.github.devbhuwan.sales.usecase.registernewcompany;

import io.github.devbhuwan.sales.entity.Company;
import org.mapstruct.Mapper;

@Mapper(componentModel = ToCompanyMapper.MAPPER_DEFAULT_COMPONENT_MODEL)
public interface ToCompanyMapper {

    String MAPPER_DEFAULT_COMPONENT_MODEL = "spring";

    Company toCompany(RegisterNewCompanyRequest request);
}
