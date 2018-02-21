package io.github.devbhuwan.core.usecase.config;

import io.github.devbhuwan.core.usecase.IOUseCase;
import io.github.devbhuwan.core.usecase.Request;
import io.github.devbhuwan.core.usecase.Response;
import io.github.devbhuwan.core.usecase.UseCase;
import io.github.devbhuwan.core.usecase.event.AfterExecuteEvent;
import io.github.devbhuwan.core.usecase.event.BeforeExecuteEvent;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.ApplicationEventPublisherAware;
import org.springframework.stereotype.Component;

@Component
public class UseCaseInvoker implements ApplicationEventPublisherAware {

    private ApplicationEventPublisher publisher;

    public <T extends Request> boolean invoke(UseCase<T> useCase, T request) {
        publisher.publishEvent(new BeforeExecuteEvent(request));
        useCase.execute(request);
        publisher.publishEvent(new AfterExecuteEvent(null));
        return true;
    }


    public <T extends Request, R extends Response> R invoke(IOUseCase<T, R> useCase, T request) {
        publisher.publishEvent(new BeforeExecuteEvent(request));
        R response = useCase.execute(request);
        publisher.publishEvent(new AfterExecuteEvent(response));
        return response;
    }

    @Override
    public void setApplicationEventPublisher(ApplicationEventPublisher applicationEventPublisher) {
        this.publisher = applicationEventPublisher;
    }
}
