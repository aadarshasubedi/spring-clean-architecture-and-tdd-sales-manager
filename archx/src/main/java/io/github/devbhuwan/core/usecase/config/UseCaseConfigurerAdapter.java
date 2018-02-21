package io.github.devbhuwan.core.usecase.config;

import io.github.devbhuwan.core.usecase.event.ValidatingUseCaseEventListener;

public class UseCaseConfigurerAdapter implements UseCaseConfigurer {

    @Override
    public void configureUseCaseConfiguration(UseCaseConfiguration config) {
    }

    @Override
    public void configureValidatingUseCaseEventListener(ValidatingUseCaseEventListener validatingListener) {
    }
}
