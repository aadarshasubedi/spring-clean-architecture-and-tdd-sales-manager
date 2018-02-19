package io.github.devbhuwan.core.usecase.annotation;

import java.lang.annotation.*;

@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Inherited
public @interface HandleBeforeExecute {
    Class<?>[] value() default {};
}
