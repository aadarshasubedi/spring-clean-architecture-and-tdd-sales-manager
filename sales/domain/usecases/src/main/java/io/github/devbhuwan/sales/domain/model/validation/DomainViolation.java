package io.github.devbhuwan.sales.domain.model.validation;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.ConstraintViolation;
import java.util.Set;
import java.util.stream.Collectors;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class DomainViolation {
    private String path;
    private String message;

    public static <T> Set<DomainViolation> convertToViolations(Set<ConstraintViolation<T>> violations) {
        return violations.stream().map(DomainViolation::toViolation)
                .collect(Collectors.toSet());
    }

    private static DomainViolation toViolation(ConstraintViolation<?> violation) {
        return new DomainViolation(violation.getPropertyPath().toString(), violation.getMessage());
    }
}
