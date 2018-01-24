package io.github.devbhuwan.sales.domain.usecase.registernewcompany;

import io.github.devbhuwan.sales.domain.model.entity.Company;

class RegisterNewCompanyRequestToCompanyMapper {

    public Company asCompany(RegisterNewCompanyRequest request) {
        Company company = new Company(request.getName());
        return company;
    }
}
