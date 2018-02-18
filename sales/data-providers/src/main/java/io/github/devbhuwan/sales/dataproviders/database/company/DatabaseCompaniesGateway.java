package io.github.devbhuwan.sales.dataproviders.database.company;

import io.github.devbhuwan.sales.entity.Company;
import io.github.devbhuwan.sales.gateway.CompaniesGateway;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class DatabaseCompaniesGateway implements CompaniesGateway {

    private final CompanyDatabaseDataProvider dataProvider;
    private final CompanyDatabaseEntityMapper mapper;

    @Override
    public Company persistNew(Company company) {
        return this.mapper.toDomain(dataProvider.save(this.mapper.toEntity(company)));
    }

    @Override
    public List<Company> findAll() {
        return this.mapper.toCompanies(this.dataProvider.findAll());
    }

}
