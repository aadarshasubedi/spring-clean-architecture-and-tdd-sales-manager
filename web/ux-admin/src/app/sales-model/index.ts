export interface UseCase<I, O> {
    execute(request: I): O;
}

export {
    RegisterNewCompanyUseCase,
    RegisterNewCompanyResponseRepresentation,
    RegisterNewCompanyRequest
} from './company/register-new-company-usecase';
