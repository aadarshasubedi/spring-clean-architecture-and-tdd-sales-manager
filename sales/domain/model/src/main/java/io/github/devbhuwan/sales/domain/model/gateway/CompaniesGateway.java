package io.github.devbhuwan.sales.domain.model.gateway;

import io.github.devbhuwan.sales.domain.model.entity.Company;

import java.util.List;

public interface CompaniesGateway {
    Company persistNew(Company company);

    List<Company> findAll();
}
