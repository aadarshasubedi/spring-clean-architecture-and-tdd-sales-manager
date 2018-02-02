package io.github.devbhuwan.sales.domain.model.usecase.registernewcompany;

import io.github.devbhuwan.sales.domain.model.entity.Company;
import io.github.devbhuwan.sales.domain.model.gateway.CompaniesGateway;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;

import javax.validation.Validation;
import javax.validation.Validator;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class RegisterNewCompanyUseCaseImplTest {

    private final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
    private final RegisterNewCompanyRequestToCompanyMapper mapper = new RegisterNewCompanyRequestToCompanyMapperImpl();
    private final CompaniesGateway gateway = mock(CompaniesGateway.class);
    private RegisterNewCompanyUseCase registerNewCompanyUseCase;

    @Before
    public void setUp() {
        registerNewCompanyUseCase = new RegisterNewCompanyUseCaseImpl(validator, mapper, gateway);
    }

    @Test
    public void givenRequestWithEmptyValueOnRequiredFields_CompanyNotRegistered() {
        RegisterNewCompanyRequest request = new RegisterNewCompanyRequest();
        RegisterNewCompanyResponseImpl response = new RegisterNewCompanyResponseImpl();
        registerNewCompanyUseCase.execute(request, response);
        verify(gateway, times(0)).persistNew(any(Company.class));
    }

    @Test
    public void givenRequestWithNonEmptyValueOnRequiredFields_doesNotContainsViolationsFor() {
    }
}