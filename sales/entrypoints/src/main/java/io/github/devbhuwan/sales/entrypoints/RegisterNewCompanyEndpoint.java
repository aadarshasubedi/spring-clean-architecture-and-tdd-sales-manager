package io.github.devbhuwan.sales.entrypoints;

import io.github.devbhuwan.sales.usecase.registernewcompany.RegisterNewCompanyRequest;
import io.github.devbhuwan.sales.usecase.registernewcompany.RegisterNewCompanyUseCase;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
public class RegisterNewCompanyEndpoint {

    private static final String API_PATH = "/companies/register";

    private final RegisterNewCompanyUseCase registerNewCompanyUseCase;

    @PostMapping(API_PATH)
    @ResponseStatus(HttpStatus.CREATED)
    public void registerNewCompany(
            @RequestBody RegisterNewCompanyRequest request) {
        log.info("Registering new company: {}", request.toString());
        registerNewCompanyUseCase.execute(request);
    }

}
