package io.github.devbhuwan.sales.usecase.registernewcompany;

import io.github.devbhuwan.core.usecase.annotation.HandleAfterExecute;
import io.github.devbhuwan.core.usecase.annotation.HandleBeforeExecute;
import io.github.devbhuwan.core.usecase.event.UseCaseEventHandler;
import org.springframework.stereotype.Component;

@UseCaseEventHandler
@Component
class RegisterNewCompanyUseCaseHandler {

    @HandleBeforeExecute
    public void handleBefore(RegisterNewCompanyRequest request) {

    }

    @HandleAfterExecute
    public void handleAfter(RegisterNewCompanyRequest response) {

    }

}
