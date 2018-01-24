package io.github.devbhuwan.sales.domain.model.entity;

import lombok.*;

@ToString
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
public class Company implements Entity {

    @Getter
    private final String name;
}
