package io.github.devbhuwan.core.usecase.event;

import org.springframework.context.ApplicationEvent;

public abstract class UseCaseEvent extends ApplicationEvent {

    protected UseCaseEvent(Object source) {
        super(source);
    }
}