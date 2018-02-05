import {Injectable} from '@angular/core';


import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {RegisterNewCompanyRequest, RegisterNewCompanyResponseRepresentation, RegisterNewCompanyUseCase, UseCase} from '../../sales-model';

@Injectable()
export class HttpRegisterNewCompanyUseCase
  implements UseCase<RegisterNewCompanyRequest, Observable<RegisterNewCompanyResponseRepresentation>> {

  constructor(private http: HttpClient) {
  }

  execute(request: RegisterNewCompanyRequest): Observable<RegisterNewCompanyResponseRepresentation> {
    return <any>this.http.post(RegisterNewCompanyUseCase.API_PATH, request);
  }


}
