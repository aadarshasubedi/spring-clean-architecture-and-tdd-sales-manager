import {AsyncHttpCommand, AsyncUseCase, HttpCommandMethod, HttpContextBuilder} from '../api';
import {Observable} from 'rxjs/Observable';

export namespace RegisterNewCompanyUseCaseModule {

  export class AsyncHttpUseCase extends AsyncUseCase<UseCaseRequest, UseCaseResponse> {
    static API_PATH = '/companies/register';

    execute(request: UseCaseRequest): Observable<UseCaseResponse> {
      return new AsyncHttpCommand(new HttpContextBuilder()
        .http(this.http)
        .uri(AsyncHttpUseCase.API_PATH)
        .method(HttpCommandMethod.POST)
        .build())
        .execute(request);
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
      return this;
    }

    build(): UseCaseRequest {
      return this.buildingRequest;
    }
  }

}
