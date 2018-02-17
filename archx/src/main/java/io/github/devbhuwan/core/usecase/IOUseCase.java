package io.github.devbhuwan.core.usecase;

@FunctionalInterface
public interface IOUseCase<I extends Request, O extends Response> {

    O execute(I request);

}
