import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {async, TestBed} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RegisterNewCompanyUseCaseModule} from './register-new-company-usecase-module';

describe('Register New Company Use Case Unit Tests', () => {

  let http: HttpClient;
  let backend: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents().then(() => {
      http = TestBed.get(HttpClient);
      backend = TestBed.get(HttpTestingController);
    });
  }));

  it('should return http ok from backend when given request has no violations', async(() => {
    const request = new RegisterNewCompanyUseCaseModule.RequestBuilder()
      .name('Bhuwan P. Upadhyay')
      .build();
    const response = 'response';
    console.log(response);
    new RegisterNewCompanyUseCaseModule
      .AsyncHttpUseCase(http)
      .execute(request).subscribe(value => {
        console.log(value);
      expect(value).toBe(response);
    });
    backend.expectOne({
      url: RegisterNewCompanyUseCaseModule.AsyncHttpUseCase.API_PATH, method: 'POST', body: request, observe: response
    });
  }));
});
