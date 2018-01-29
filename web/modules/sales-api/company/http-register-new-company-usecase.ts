import {Injectable} from '@angular/core';
import {
    EndpointInvoker,
    RegisterNewCompanyRequest,
    RegisterNewCompanyResponseRepresentation,
    RegisterNewCompanyUseCase
} from "@devbhuwan-salesmanager/sales-model";

import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HttpRegisterNewCompanyUseCaseEndpointInvoker implements EndpointInvoker<RegisterNewCompanyRequest, Observable<RegisterNewCompanyResponseRepresentation>> {

    constructor(private http: HttpClient) {
    }

    invoke(request: RegisterNewCompanyRequest): Observable<RegisterNewCompanyResponseRepresentation> {
        return <any>this.http.post(RegisterNewCompanyUseCase.API_PATH, request);
    }


}