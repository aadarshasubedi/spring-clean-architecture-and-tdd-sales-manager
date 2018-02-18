package io.github.devbhuwan.sales.gateway;

import io.github.devbhuwan.sales.entity.Company;

import java.util.List;

public interface CompaniesGateway {
    Company persistNew(Company company);

    List<Company> findAll();
}
