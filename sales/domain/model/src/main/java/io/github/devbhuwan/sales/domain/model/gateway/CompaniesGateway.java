package io.github.devbhuwan.sales.domain.model.gateway;

import io.github.devbhuwan.sales.domain.model.entity.Company;

public interface CompaniesGateway {
    Company persistNew(Company company);
}
