package io.github.devbhuwan.sales.domain.model.validation;

import io.github.devbhuwan.sales.domain.model.validation.DomainViolation;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Set;

@AllArgsConstructor
@Getter
public class DomainNotValidException extends RuntimeException {
    private Set<DomainViolation> violations;
}
