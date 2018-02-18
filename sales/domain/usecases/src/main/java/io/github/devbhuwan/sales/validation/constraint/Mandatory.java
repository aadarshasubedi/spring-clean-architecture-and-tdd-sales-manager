package io.github.devbhuwan.sales.validation.constraint;

import io.github.devbhuwan.sales.validation.validator.MandatoryValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import javax.validation.constraints.NotNull;
import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.*;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Target({FIELD, METHOD, PARAMETER, ANNOTATION_TYPE})
@Retention(RUNTIME)
@Constraint(validatedBy = MandatoryValidator.class)
@Documented
@NotNull
public @interface Mandatory {
    String message() default "Mandatory";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
