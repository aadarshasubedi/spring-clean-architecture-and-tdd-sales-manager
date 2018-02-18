package io.github.devbhuwan.sales.entrypoints.error.handlers;

import io.github.devbhuwan.sales.validation.DomainNotValidException;
import io.github.devbhuwan.sales.validation.DomainViolation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Collections;
import java.util.Optional;
import java.util.Set;

@ControllerAdvice
public class SalesEndpointExceptionHandler {

    @ExceptionHandler({DomainNotValidException.class})
    public ResponseEntity<Set<DomainViolation>> handleDomainViolations(final DomainNotValidException exception) {
        return new ResponseEntity<>(Optional.ofNullable(exception.getViolations())
                .orElse(Collections.emptySet()),
                HttpStatus.BAD_REQUEST);
    }
}
