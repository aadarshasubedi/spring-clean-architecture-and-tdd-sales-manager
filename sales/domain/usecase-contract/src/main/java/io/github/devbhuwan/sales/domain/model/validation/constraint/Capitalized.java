package io.github.devbhuwan.sales.domain.model.validation.constraint;

import io.github.devbhuwan.sales.domain.model.validation.validator.CapitalizedValidator;
import org.hibernate.validator.constraints.NotBlank;

import javax.validation.Constraint;
import javax.validation.Payload;
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
    String message() default "{io.github.devbhuwan" +
            "companies.domain.validation.constraint.Capitalized.message}";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
