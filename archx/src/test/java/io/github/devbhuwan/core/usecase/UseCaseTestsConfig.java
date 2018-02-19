package io.github.devbhuwan.core.usecase;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UseCaseTestsConfig {

    @Autowired
    private ApplicationContext context;

}
