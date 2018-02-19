package io.github.devbhuwan.sales.dataproviders.database.company;

import io.github.devbhuwan.sales.entity.Company;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

class DatabaseCompaniesGatewayUnitTests {

    DatabaseCompaniesGateway databaseCompaniesGateway;
    CompanyDatabaseDataProvider dataProvider = mock(CompanyDatabaseDataProvider.class);

    @BeforeEach
    void setUp() {
        databaseCompaniesGateway = new DatabaseCompaniesGateway(dataProvider,
                new CompanyDatabaseEntityMapperImpl());
    }

    @Test
    void givenCompany_whenPersist_shouldPersistedIntoDb() {
        databaseCompaniesGateway.persistNew(new Company());
        verify(dataProvider, times(1)).save(any(CompanyDatabaseEntity.class));
    }

    @Test
    void givenCompany_whenFindAll_shouldGetAllFromDb() {
        databaseCompaniesGateway.findAll();
        verify(dataProvider, times(1)).findAll();
    }
}