package io.github.devbhuwan.sales.entrypoints

import io.github.devbhuwan.sales.usecase.fetchcompanies.FetchCompaniesRequest
import io.github.devbhuwan.sales.usecase.registernewcompany.RegisterNewCompanyRequest
import io.restassured.RestAssured
import io.restassured.builder.RequestSpecBuilder
import io.restassured.response.ValidatableResponse

object SalesEndpointFunctions {

    private val saleServiceSpec = RequestSpecBuilder()
            .setBaseUri("http://${IntegrationTestBase.serviceHost()}")
            .setContentType("application/json;charset=UTF-8")
            .setAccept("application/json")
            .build()

    fun getCompaniesResponse(fetchCompaniesRequest: FetchCompaniesRequest): ValidatableResponse {
        return RestAssured
                .given()
                .spec(saleServiceSpec).log().all()
                .body(fetchCompaniesRequest)
                .get("/companies")
                .then()
    }

    fun postRegisterNewCompanyResponse(registerNewCompanyRequest: RegisterNewCompanyRequest): ValidatableResponse {
        return RestAssured
                .given()
                .spec(saleServiceSpec).log().all()
                .body(registerNewCompanyRequest)
                .post("/companies/register").then()
    }

}