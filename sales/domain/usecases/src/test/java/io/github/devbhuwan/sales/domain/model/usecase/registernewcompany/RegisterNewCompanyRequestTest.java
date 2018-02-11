package io.github.devbhuwan.sales.domain.model.usecase.registernewcompany;

import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;

import javax.validation.Validation;
import javax.validation.Validator;

public class RegisterNewCompanyRequestTest {
    private Validator validator;

    @Before
    public void setUp() {
        validator = Validation.buildDefaultValidatorFactory().getValidator();
    }

    @Test
    public void nameIsMandatory() {
        Assertions.assertThat(validator.validate(RegisterNewCompanyRequest.builder().build()))
                .isNotEmpty()
                .extracting("propertyPath.currentLeafNode.name")
                .contains("name");
    }


    @Test
    public void codeIsMandatory() {
        Assertions.assertThat(validator.validate(RegisterNewCompanyRequest.builder().build()))
                .isNotEmpty()
                .extracting("propertyPath.currentLeafNode.name")
                .contains("contactPerson");
    }
}