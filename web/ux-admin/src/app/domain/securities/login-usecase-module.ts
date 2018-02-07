import {AsyncHttpCommand, AsyncUseCase, HttpCommandMethod, HttpContextBuilder} from '../../api';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Injectable, Provider} from '@angular/core';

export namespace LoginUseCaseModule {

  export function providers(): Provider[] {
    return [HttpUseCase];
  }

  @Injectable()
  export class HttpUseCase extends AsyncUseCase<RequestPayload, UseCaseResponse> {
    static API_PATH = '/login';

    constructor(private http: HttpClient) {
      super();
    }

    execute(request: RequestPayload): Observable<UseCaseResponse> {
      return new AsyncHttpCommand<RequestPayload, UseCaseResponse>(new HttpContextBuilder()
        .http(this.http)
        .uri(HttpUseCase.API_PATH)
        .method(HttpCommandMethod.POST)
        .build())
        .execute(request);
    }
  }

  const moduleName = '[LoginUseCaseModule]';

  interface RequestPayload {
    username: string;
    password: string;
  }

  class UseCaseResponse {
    username: string;
  }

  export class PayloadBuilder {
    private buildingRequest: RequestPayload;

    constructor() {
      this.buildingRequest = <any>{};
    }

    username(username: string): PayloadBuilder {
      this.buildingRequest.username = username;
      return this;
    }

    password(password: string): PayloadBuilder {
      this.buildingRequest.password = password;
      return this;
    }

    build(): RequestPayload {
      return this.buildingRequest;
    }
  }

}
