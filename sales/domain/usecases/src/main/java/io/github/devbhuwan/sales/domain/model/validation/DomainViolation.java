package io.github.devbhuwan.sales.domain.model.validation;

import lombok.RequiredArgsConstructor;
import lombok.ToString;

import javax.validation.ConstraintViolation;
import java.util.Set;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@ToString
public class DomainViolation {
    private final Object path;
    private final String message;

    public static <T> Set<DomainViolation> convertToViolations(Set<ConstraintViolation<T>> violations) {
        return violations.stream().map(DomainViolation::toViolation)
                .collect(Collectors.toSet());
    }

    private static DomainViolation toViolation(ConstraintViolation<?> violation) {
        return new DomainViolation(violation.getPropertyPath(), violation.getMessage());
    }
}
