package io.github.devbhuwan.core.usecase.event;

import java.lang.annotation.*;

@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Inherited
public @interface UseCaseEventHandler {
    Class<?>[] value() default {};
}
