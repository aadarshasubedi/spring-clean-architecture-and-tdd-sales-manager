import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {async, TestBed} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginUseCaseModule} from './login-usecase-module';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

describe('[LoginUseCaseModule] Unit Tests', () => {

  let http: HttpClient;
  let backend: HttpTestingController;
  let useCase: LoginUseCaseModule.HttpUseCase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [LoginUseCaseModule.providers()]
    })
      .compileComponents().then(() => {
      http = TestBed.get(HttpClient);
      backend = TestBed.get(HttpTestingController);
      useCase = TestBed.get(LoginUseCaseModule.HttpUseCase);
    });
  }));

  it(`should invoke async http request on uri "${LoginUseCaseModule.HttpUseCase.API_PATH}"`, async(() => {
    const request = new LoginUseCaseModule.PayloadBuilder()
      .username('developerbhuwan')
      .build();
    useCase.execute(request).subscribe();
    backend.expectOne({
      url: LoginUseCaseModule.HttpUseCase.API_PATH, method: 'GET'
    });
  }));

});
