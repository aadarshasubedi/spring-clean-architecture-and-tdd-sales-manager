package io.github.devbhuwan.sales.domain.model.usecase.fetchcompanies;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.github.devbhuwan.core.usecase.Response;
import io.github.devbhuwan.sales.domain.model.entity.Company;
import org.immutables.value.Value;

import java.util.List;

@Value.Immutable
@JsonSerialize(as = ImmutableFetchCompaniesResponse.class)
@JsonDeserialize(as = ImmutableFetchCompaniesResponse.class)
public interface FetchCompaniesResponse extends Response {
    List<Company> companies();
}
