package io.github.devbhuwan.sales.dataproviders.database.company;

import org.springframework.data.repository.PagingAndSortingRepository;

interface CompanyDatabaseDataProvider extends PagingAndSortingRepository<CompanyDatabaseEntity, String> {

}
