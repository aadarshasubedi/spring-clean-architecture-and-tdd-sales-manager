import {AsyncHttpCommand, AsyncUseCase, BASE_URI, HttpCommandMethod, HttpContextBuilder} from '../../../../api';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Injectable, Provider} from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

export namespace AddNewItemUseCaseModule {

  export const moduleName = '[AddNewItemUseCaseModule]';

  export function providers(): Provider[] {
    return [HttpUseCase];
  }

  @Injectable()
  export class HttpUseCase extends AsyncUseCase<RequestPayload, UseCaseResponse> {
    static API_PATH = BASE_URI + '/companies/register';

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

  export class UseCaseForm {

    static create(): FormGroup {
      return new FormGroup({
        'code': new FormControl('', UseCaseFormValidators.code),
        'name': new FormControl('', [Validators.required]),
        'description': new FormControl('')
      });
    }
  }

  export class UseCaseFormValidators {
    static CODE_PREFIX = 'CODE-';
    static code: ValidatorFn[] = [
      Validators.pattern(UseCaseFormValidators.CODE_PREFIX + '\w+')
    ];
  }

  interface RequestPayload {
    code: string;
    name: string;
    description: string;
  }

  class UseCaseResponse {
  }

  export class PayloadBuilder {
    private buildingRequest: RequestPayload;

    constructor() {
      this.buildingRequest = <any>{};
    }

    code(code: string) {
      this.buildingRequest.code = code;
      return this;
    }

    name(name: string) {
      this.buildingRequest.name = name;
      return this;
    }


    description(description: string) {
      this.buildingRequest.description = description;
      return this;
    }

    build(): RequestPayload {
      return this.buildingRequest;
    }

  }

}
