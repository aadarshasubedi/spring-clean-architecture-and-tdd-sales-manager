package io.github.devbhuwan.sales.validation;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Set;

@AllArgsConstructor
@Getter
public class DomainNotValidException extends RuntimeException {
    private Set<DomainViolation> violations;
}
