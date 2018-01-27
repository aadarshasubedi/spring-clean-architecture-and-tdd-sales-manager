package io.github.devbhuwan.sales.domain.model.validation;

import lombok.RequiredArgsConstructor;
import lombok.ToString;

@RequiredArgsConstructor
@ToString
public class DomainViolation {
    private final Object path;
    private final String message;
}
