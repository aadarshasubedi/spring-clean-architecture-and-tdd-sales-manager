package io.github.devbhuwan.sales.domain.model.usecase.registernewcompany;

import org.assertj.core.api.AbstractListAssert;
import org.assertj.core.api.ObjectAssert;
import org.assertj.core.util.Lists;
import org.junit.Before;
import org.junit.Test;

import javax.validation.Validation;
import javax.validation.Validator;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class RegisterNewCompanyRequestTest {

    private static final List<String> GIVEN_MANDATORY_FIELDS = Lists.newArrayList(
            "name",
            "contactPerson"
    );

    private Validator validator;

    @Before
    public void setUp() {
        validator = Validation.buildDefaultValidatorFactory().getValidator();
    }

    @Test
    public void givenMandatoryFieldsAreValidated() {
        AbstractListAssert<?, List<?>, Object, ObjectAssert<Object>> listAssert
                = assertThat(validator.validate(RegisterNewCompanyRequest.builder().build()))
                .isNotEmpty()
                .extracting("propertyPath.currentLeafNode.name");
        GIVEN_MANDATORY_FIELDS.forEach(listAssert::contains);
    }

}