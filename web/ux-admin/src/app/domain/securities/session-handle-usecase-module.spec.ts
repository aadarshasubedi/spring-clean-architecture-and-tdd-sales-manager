import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {async, TestBed} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {SessionHandleUseCaseModule} from './session-handle-usecase-module';

describe('SessionHandleUseCaseModule Unit Tests', () => {

  let http: HttpClient;
  let backend: HttpTestingController;
  let initializeUseCase: SessionHandleUseCaseModule.InitializeLocalSessionUseCase;
  let destroyUseCase: SessionHandleUseCaseModule.DestroyLocalSessionUseCase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [SessionHandleUseCaseModule.providers()]
    })
      .compileComponents().then(() => {
      http = TestBed.get(HttpClient);
      backend = TestBed.get(HttpTestingController);
      initializeUseCase = TestBed.get(SessionHandleUseCaseModule.InitializeLocalSessionUseCase);
      destroyUseCase = TestBed.get(SessionHandleUseCaseModule.DestroyLocalSessionUseCase);
    });
  }));

  it(`should initialize session in local session`, async(() => {
    const request = new SessionHandleUseCaseModule.LoggedUserBuilder()
      .username('developerbhuwan')
      .build();
    initializeUseCase.execute(request);
  }));

  it(`should destroy session in local session`, async(() => {
    const request = new SessionHandleUseCaseModule.LoggedUserBuilder()
      .username('developerbhuwan')
      .build();
    destroyUseCase.execute(request);
  }));

});
