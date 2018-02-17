package io.github.devbhuwan.core.usecase;

@FunctionalInterface
public interface UseCase<I extends Request> {

    void execute(I request);

}
