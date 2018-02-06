import {AsyncHttpCommand, AsyncPresenter, AsyncUseCase, HttpCommandMethod, HttpContextBuilder} from '../api';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ViewRoutes} from './routes';

export namespace RegisterNewCompanyUseCaseModule {

  @Injectable()
  export class HttpUseCase extends AsyncUseCase<RequestPayload, UseCaseResponse> {
    static API_PATH = '/companies/register';

    constructor(private http: HttpClient) {
      super();
    }

    execute(request: RequestPayload): Observable<UseCaseResponse> {
      return new AsyncHttpCommand(new HttpContextBuilder()
        .http(this.http)
        .uri(HttpUseCase.API_PATH)
        .method(HttpCommandMethod.POST)
        .build())
        .execute(request);
    }
  }

  @Injectable()
  export class ViewPresenter extends AsyncPresenter<UseCaseResponse> {

    constructor(private router: Router) {
      super();
    }

    present(response: Observable<UseCaseResponse>) {
      response.subscribe(value => {
        this.router.navigate([ViewRoutes.DASHBOARD])
          .then(() => console.log('Successfully routed to dashboard.'));
      }, (err: HttpErrorResponse) => {
        throw Error(err.message);
      });
    }
  }

  interface RequestPayload {
    name: string;
    address: string;
    contactPerson: string;
    country: string;
    stateCode: string;
    telephone: string;
    email: string;
    beginningOfYear: number;
  }

  class UseCaseResponse {
  }

  export class PayloadBuilder {
    private buildingRequest: RequestPayload;

    constructor() {
      this.buildingRequest = <any>{};
    }

    name(name: string): PayloadBuilder {
      this.buildingRequest.name = name;
      return this;
    }

    address(address: string): PayloadBuilder {
      this.buildingRequest.address = address;
      return this;
    }

    beginningOfYear(beginningOfYear: number): PayloadBuilder {
      this.buildingRequest.beginningOfYear = beginningOfYear;
      return this;
    }

    contactPerson(contactPerson: string): PayloadBuilder {
      this.buildingRequest.contactPerson = contactPerson;
      return this;
    }

    email(email: string): PayloadBuilder {
      this.buildingRequest.email = email;
      return this;
    }

    country(country: string): PayloadBuilder {
      this.buildingRequest.country = country;
      return this;
    }

    stateCode(stateCode: string): PayloadBuilder {
      this.buildingRequest.stateCode = stateCode;
      return this;
    }

    telephone(telephone: string): PayloadBuilder {
      this.buildingRequest.telephone = telephone;
      return this;
    }

    build(): RequestPayload {
      return this.buildingRequest;
    }
  }

}
