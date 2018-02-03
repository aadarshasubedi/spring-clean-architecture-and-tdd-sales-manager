export interface EndpointInvoker<I, O> {
    invoke(request: I): O;
}

export {
    RegisterNewCompanyUseCase,
    RegisterNewCompanyResponseRepresentation,
    RegisterNewCompanyRequest
} from './company/register-new-company-usecase';
