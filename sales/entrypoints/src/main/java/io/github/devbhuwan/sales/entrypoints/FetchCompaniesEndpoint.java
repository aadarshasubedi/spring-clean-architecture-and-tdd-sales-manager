package io.github.devbhuwan.sales.entrypoints;

import io.github.devbhuwan.sales.domain.model.entity.Company;
import io.github.devbhuwan.sales.domain.model.usecase.fetchcompanies.FetchCompaniesRequest;
import io.github.devbhuwan.sales.domain.model.usecase.fetchcompanies.FetchCompaniesUseCase;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
public class FetchCompaniesEndpoint {

    private static final String API_PATH = "/companies";
    private final FetchCompaniesUseCase fetchCompaniesUseCase;

    @GetMapping(API_PATH)
    public List<Company> fetchCompanies(@RequestBody FetchCompaniesRequest request) {
        log.info("Fetch Companies: {}", request.toString());
        return fetchCompaniesUseCase.execute(request).companies();
    }

}
