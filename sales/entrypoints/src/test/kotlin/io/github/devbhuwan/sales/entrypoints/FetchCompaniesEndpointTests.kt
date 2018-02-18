package io.github.devbhuwan.sales.entrypoints

import io.github.devbhuwan.sales.usecase.fetchcompanies.ImmutableFetchCompaniesRequest
import io.github.devbhuwan.sales.entrypoints.SalesEndpointFunctions.getCompaniesResponse
import io.kotlintest.matchers.shouldNotBe
import io.kotlintest.specs.StringSpec
import org.springframework.http.HttpStatus


class FetchCompaniesEndpointTests : StringSpec() {

    init {

        "get(/companies): Call the companies list and get 200" {
            val response = getCompaniesResponse(ImmutableFetchCompaniesRequest.builder().build())
            response shouldNotBe null
            response.statusCode(HttpStatus.OK.value())
        }.config(tags = setOf(Integration))


    }

}