package io.github.devbhuwan.sales.entrypoints.util

import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.KotlinModule
import io.restassured.mapper.factory.Jackson2ObjectMapperFactory


object ObjectMapperConfigurator {
    val objectMapper = ObjectMapper().registerModule(KotlinModule())

    init {
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
        objectMapper.configure(DeserializationFeature.FAIL_ON_MISSING_CREATOR_PROPERTIES, false)

        objectMapper.setSerializationInclusion(JsonInclude.Include.NON_EMPTY)
    }

    fun get(): ObjectMapper {
        return objectMapper
    }
}

val objectMapperFactory = object : Jackson2ObjectMapperFactory {

    override fun create(cls: Class<*>?, charset: String?): ObjectMapper {
        return ObjectMapperConfigurator.get()
    }
}