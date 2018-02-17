package io.github.devbhuwan.sales.domain.model.usecase.fetchcompanies;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.github.devbhuwan.core.usecase.Request;
import org.immutables.value.Value;

@Value.Immutable
@JsonSerialize(as = ImmutableFetchCompaniesRequest.class)
@JsonDeserialize(as = ImmutableFetchCompaniesRequest.class)
public interface FetchCompaniesRequest extends Request {
}
