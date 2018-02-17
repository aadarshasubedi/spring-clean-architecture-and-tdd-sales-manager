package io.github.devbhuwan.sales.entrypoints

import io.github.devbhuwan.sales.SalesServiceApplication
import io.github.devbhuwan.sales.entrypoints.util.objectMapperFactory
import io.kotlintest.ProjectConfig
import io.kotlintest.Tag
import io.restassured.RestAssured
import io.restassured.config.ObjectMapperConfig
import io.restassured.config.RestAssuredConfig

object Integration : Tag()

object IntegrationTestBase {

    fun serviceHost(): String = "localhost:8080"

}

@Suppress("unused")
object GlobalTestSuiteInitializer : ProjectConfig() {

    private var started: Long = 0

    override fun beforeAll() {
        SalesServiceApplication.main(arrayOf())
        RestAssured.config = RestAssuredConfig.config()
                .objectMapperConfig(ObjectMapperConfig.objectMapperConfig()
                        .jackson2ObjectMapperFactory(objectMapperFactory))
        started = System.currentTimeMillis()
    }

    override fun afterAll() {
        val time = System.currentTimeMillis() - started
        println("overall time [ms]: " + time)
    }
}