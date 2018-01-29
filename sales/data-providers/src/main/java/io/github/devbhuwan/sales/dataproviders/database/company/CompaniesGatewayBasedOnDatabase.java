package io.github.devbhuwan.sales.dataproviders.database.company;

import io.github.devbhuwan.sales.domain.model.entity.Company;
import io.github.devbhuwan.sales.domain.model.gateway.CompaniesGateway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
class CompaniesGatewayBasedOnDatabase implements CompaniesGateway {

    private final CompanyDatabaseDataProvider dataProvider;
    private final CompanyDatabaseEntityMapper mapper;

    @Autowired
    public CompaniesGatewayBasedOnDatabase(CompanyDatabaseDataProvider dataProvider, CompanyDatabaseEntityMapper mapper) {
        this.dataProvider = dataProvider;
        this.mapper = mapper;
    }

    @Override
    public Company persistNew(Company company) {
        return this.mapper.toDomain(dataProvider.save(this.mapper.toEntity(company)));
    }

}
