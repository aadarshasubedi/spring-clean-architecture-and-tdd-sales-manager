package io.github.devbhuwan.sales.entrypoints

import com.github.javafaker.Faker
import io.github.devbhuwan.sales.domain.model.usecase.registernewcompany.RegisterNewCompanyRequest
import io.github.devbhuwan.sales.entrypoints.SalesEndpointFunctions.postRegisterNewCompanyResponse
import io.kotlintest.matchers.shouldNotBe
import io.kotlintest.specs.StringSpec
import org.springframework.http.HttpStatus

class RegisterNewCompanyEndpointTests : StringSpec() {

    private val faker = Faker()

    init {

        "post(/companies/register): when mandatory fields of request has empty value then should return ${HttpStatus.BAD_REQUEST.value()}" {
            val response = postRegisterNewCompanyResponse(RegisterNewCompanyRequest.builder().build())
            response shouldNotBe null
            response.statusCode(HttpStatus.BAD_REQUEST.value())
        }.config(tags = setOf(Integration))

        "post(/companies/register): when mandatory fields of request has non empty value then should return ${HttpStatus.CREATED.value()}" {
            val response = postRegisterNewCompanyResponse(RegisterNewCompanyRequest.builder()
                    .name(faker.name().fullName())
                    .stateCode(faker.code().asin())
                    .beginningOfYear(faker.number().numberBetween(2000L, 2020L).toInt())
                    .country(faker.address().country())
                    .email(faker.internet().emailAddress())
                    .address(faker.address().fullAddress())
                    .contactPerson(faker.name().fullName())
                    .telephone(faker.phoneNumber().cellPhone())
                    .build())
            response shouldNotBe null
            response.statusCode(HttpStatus.CREATED.value())
        }.config(tags = setOf(Integration))


    }

}
