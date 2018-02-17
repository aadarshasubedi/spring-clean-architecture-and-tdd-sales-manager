package io.github.devbhuwan.sales.domain.model.usecase.registernewcompany;

import io.github.devbhuwan.sales.domain.model.entity.Company;
import io.github.devbhuwan.sales.domain.model.gateway.CompaniesGateway;
import io.github.devbhuwan.sales.domain.model.validation.DomainNotValidException;
import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;

import javax.validation.Validation;

import static org.mockito.Mockito.*;

public class RegisterNewCompanyUseCaseTest {

    private RegisterNewCompanyUseCase registerNewCompanyUseCase;
    private ToCompanyMapper toCompanyMapper = mock(ToCompanyMapper.class);
    private CompaniesGateway companiesGateway = mock(CompaniesGateway.class);

    @Before
    public void setUp() {
        registerNewCompanyUseCase = new RegisterNewCompanyUseCase(
                toCompanyMapper,
                companiesGateway,
                Validation.buildDefaultValidatorFactory().getValidator());
    }

    @Test
    public void givenNotValidRequest_whenExecute_thenShouldThrowConstrainViolationException() {
        Assertions.assertThatExceptionOfType(DomainNotValidException.class)
                .isThrownBy(() -> registerNewCompanyUseCase.execute(RegisterNewCompanyRequest.builder().build()));
    }

    @Test
    public void givenValidRequest_whenExecute_thenShouldPersisNewCompany() {
        RegisterNewCompanyRequest validRequest = RegisterNewCompanyRequest.builder()
                .address("UAE")
                .contactPerson("Bhuwan Upadhyay")
                .beginningOfYear(2018)
                .country("NEPAL")
                .email("bhuwan.upadhyay@me.com")
                .name("BhuwanPlaza")
                .stateCode("2131")
                .telephone("+93242424324")
                .build();
        registerNewCompanyUseCase.execute(validRequest);
        verify(companiesGateway, times(1)).persistNew(any(Company.class));
    }
}