package io.github.devbhuwan.core.usecase.domain;

import io.github.devbhuwan.core.usecase.annotation.HandleAfterExecute;
import io.github.devbhuwan.core.usecase.annotation.HandleBeforeExecute;
import io.github.devbhuwan.core.usecase.event.UseCaseEventHandler;

@UseCaseEventHandler
public class AnnotatedAddPersonUseCaseEventHandler {


    @HandleBeforeExecute
    public void handleBefore(AddPersonRequest p) {
        throw new EventHandlerInvokedException();
    }

    @HandleAfterExecute
    public void handleAfter(AddPersonRequest p) {
        throw new EventHandlerInvokedException();
    }


}
