package io.github.devbhuwan.core.usecase.domain;

import io.github.devbhuwan.core.usecase.Request;
import lombok.Data;

import java.util.UUID;

@Data
public class AddPersonRequest implements Request{

    private final UUID id = UUID.randomUUID();
    private final String firstName, lastName;

}
