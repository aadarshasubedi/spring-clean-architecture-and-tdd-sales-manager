package io.github.devbhuwan.sales.usecase.fetchcompanies;

import io.github.devbhuwan.core.usecase.IOUseCase;
import io.github.devbhuwan.sales.gateway.CompaniesGateway;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class FetchCompaniesUseCase implements IOUseCase<FetchCompaniesRequest, FetchCompaniesResponse> {

    private final CompaniesGateway companiesGateway;

    @Override
    public FetchCompaniesResponse execute(FetchCompaniesRequest request) {
        return ImmutableFetchCompaniesResponse
                .builder()
                .addAllCompanies(companiesGateway.findAll())
                .build();
    }

}
