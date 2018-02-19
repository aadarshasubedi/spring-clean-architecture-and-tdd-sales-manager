package io.github.devbhuwan.core.usecase.domain;

import io.github.devbhuwan.core.usecase.event.AbstractUseCaseEventListener;

public class AddPersonUseCaseEventHandler extends AbstractUseCaseEventListener<AddPersonRequest> {
    @Override
    protected void onBeforeExecute(AddPersonRequest entity) {
        throw new EventHandlerInvokedException();
    }

    @Override
    protected void onAfterExecute(AddPersonRequest entity) {
        throw new EventHandlerInvokedException();
    }
}
