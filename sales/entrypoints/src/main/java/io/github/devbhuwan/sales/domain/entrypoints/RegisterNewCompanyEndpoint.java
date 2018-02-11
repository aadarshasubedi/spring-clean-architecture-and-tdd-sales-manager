package io.github.devbhuwan.sales.domain.entrypoints;

import io.github.devbhuwan.sales.domain.model.usecase.registernewcompany.RegisterNewCompanyRequest;
import io.github.devbhuwan.sales.domain.model.usecase.registernewcompany.RegisterNewCompanyUseCase;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class RegisterNewCompanyEndpoint {

    private static final String API_PATH = "/companies/register";

    private RegisterNewCompanyUseCase registerNewCompanyUseCase;

    @Autowired
    public RegisterNewCompanyEndpoint(RegisterNewCompanyUseCase registerNewCompanyUseCase) {
        this.registerNewCompanyUseCase = registerNewCompanyUseCase;
    }

    @PostMapping(API_PATH)
    @ResponseStatus(HttpStatus.CREATED)
    public RegisterNewCompanyResponseRepresentation registerNewCompany(
            @RequestBody RegisterNewCompanyRequest request) {
        log.info("Registering new company: {}", request.toString());
        RegisterNewCompanyResponseRepresentation response = new RegisterNewCompanyResponseRepresentation();
        registerNewCompanyUseCase.execute(request, response);
        return response;
    }

}
