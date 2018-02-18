package io.github.devbhuwan.sales.validation.constraint;

import io.github.devbhuwan.sales.validation.validator.CapitalizedValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import javax.validation.constraints.NotBlank;
import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.*;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Target({FIELD, METHOD, PARAMETER, ANNOTATION_TYPE})
@Retention(RUNTIME)
@Constraint(validatedBy = CapitalizedValidator.class)
@Documented
@NotBlank
public @interface Capitalized {

    String message() default "Capitalized.message";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
