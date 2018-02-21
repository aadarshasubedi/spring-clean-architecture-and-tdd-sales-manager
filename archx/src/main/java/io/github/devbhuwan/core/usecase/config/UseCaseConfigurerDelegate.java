package io.github.devbhuwan.core.usecase.config;

import io.github.devbhuwan.core.usecase.event.ValidatingUseCaseEventListener;
import org.springframework.util.Assert;


class UseCaseConfigurerDelegate implements UseCaseConfigurer {

    private final Iterable<UseCaseConfigurer> delegates;

    public UseCaseConfigurerDelegate(Iterable<UseCaseConfigurer> delegates) {

        Assert.notNull(delegates, "UseCaseConfigurers must not be null!");

        this.delegates = delegates;
    }

    @Override
    public void configureUseCaseConfiguration(UseCaseConfiguration config) {

        for (UseCaseConfigurer configurer : delegates) {
            configurer.configureUseCaseConfiguration(config);
        }
    }


    @Override
    public void configureValidatingUseCaseEventListener(ValidatingUseCaseEventListener validatingListener) {

        for (UseCaseConfigurer configurer : delegates) {
            configurer.configureValidatingUseCaseEventListener(validatingListener);
        }
    }
}
