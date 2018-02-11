import {AsyncHttpCommand, AsyncUseCase, BASE_URI, HttpCommandMethod, HttpContextBuilder} from '../../../../api';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Injectable, Provider} from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

export namespace RetrieveItemsUseCaseModule {


  export function providers(): Provider[] {
    return [HttpUseCase];
  }

  @Injectable()
  export class HttpUseCase extends AsyncUseCase<RequestPayload, UseCaseResponse> {
    static API_PATH = BASE_URI + '/items';

    constructor(private http: HttpClient) {
      super();
    }

    execute(request: RequestPayload): Observable<UseCaseResponse> {
      return new AsyncHttpCommand<RequestPayload, UseCaseResponse>(new HttpContextBuilder()
        .http(this.http)
        .uri(HttpUseCase.API_PATH)
        .method(HttpCommandMethod.GET)
        .build())
        .execute(request);
    }
  }

  export class UseCaseForm {

    static create(): FormGroup {
      return new FormGroup({
        'code': new FormControl('', [Validators.required]),
        'name': new FormControl('', [Validators.required]),
        'description': new FormControl('')
      });
    }
  }

  export class UseCaseFormValidators {
    static CODE_PREFIX = 'CODE-';
    static CODE_PREFIX_REGEX = '^' + UseCaseFormValidators.CODE_PREFIX + '\w+$';
    static code: ValidatorFn[] = [
      Validators.pattern(UseCaseFormValidators.CODE_PREFIX_REGEX)
    ];
  }

  interface RequestPayload {
    page: string;
    noOfRows: string;
  }

  class UseCaseResponse {
    code: string;
    name: string;
    description: string;
  }

  export class PayloadBuilder {
    private buildingRequest: RequestPayload;

    constructor() {
      this.buildingRequest = <any>{};
    }

    page(page: string) {
      this.buildingRequest.page = page;
      return this;
    }

    noOfRows(noOfRows: string) {
      this.buildingRequest.noOfRows = noOfRows;
      return this;
    }

    build(): RequestPayload {
      return this.buildingRequest;
    }

  }

}
