package io.github.devbhuwan.core.usecase;

@FunctionalInterface
public interface UseCase<I extends Request, O extends Response> {

    void execute(I request, O response);

}
