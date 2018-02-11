import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {async, TestBed} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RegisterNewCompanyUseCaseModule} from './register-new-company-usecase-module';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

describe('Register New Company Use Case Unit Tests', () => {

  let http: HttpClient;
  let backend: HttpTestingController;
  let useCase: RegisterNewCompanyUseCaseModule.HttpUseCase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [RegisterNewCompanyUseCaseModule.providers()]
    })
      .compileComponents().then(() => {
      http = TestBed.get(HttpClient);
      backend = TestBed.get(HttpTestingController);
      useCase = TestBed.get(RegisterNewCompanyUseCaseModule.HttpUseCase);
    });
  }));

  it(`should invoke async http request on uri "${RegisterNewCompanyUseCaseModule.HttpUseCase.API_PATH}"`, async(() => {
    const request = new RegisterNewCompanyUseCaseModule.PayloadBuilder()
      .name('Bhuwan P. Upadhyay')
      .build();
    useCase.execute(request).subscribe();
    backend.expectOne({
      url: RegisterNewCompanyUseCaseModule.HttpUseCase.API_PATH, method: 'POST'
    });
  }));

});
