import {UseCase} from '../index';

export interface RegisterNewCompanyResponseRepresentation {
  violations: any[];
}


export function FormControlDef(name: string, label: string) {
  // do something
  new RegisterNewCompanyUseCaseModule.RequestBuilder()
    .name('name');
}

namespace RegisterNewCompanyUseCaseModule {

  export class RegisterNewCompanyUseCase implements UseCase<UseCaseRequest, UseCaseResponse> {
    static API_PATH = '/companies/register';

    execute(request: RegisterNewCompanyUseCaseModule.UseCaseRequest): RegisterNewCompanyUseCaseModule.UseCaseResponse {
      return undefined;
    }
  }

  export interface UseCaseRequest {
    name: string;
    address: string;
    contactPerson: string;
    country: string;
    stateCode: string;
    telephone: string;
    email: string;
    beginningOfYear: number;
  }

  export interface UseCaseResponse {
    violations: any[];
  }

  export class RequestBuilder {
    private buildingRequest: UseCaseRequest;

    constructor() {
      this.buildingRequest = <any>{};
    }

    name(name: string): RequestBuilder {
      this.buildingRequest.name = name;
      return <RequestBuilder>this;
    }

    build(): UseCaseRequest {
      return this.buildingRequest;
    }
  }

}
