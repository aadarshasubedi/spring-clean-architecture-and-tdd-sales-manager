import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {async, TestBed} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RetrieveItemsUseCaseModule} from './retrieve-items-usecase-module';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {ReactiveFormsModule} from '@angular/forms';

describe(`[RetrieveItemsUseCaseModule] Unit Tests`, () => {

  let http: HttpClient;
  let backend: HttpTestingController;
  let useCase: RetrieveItemsUseCaseModule.HttpUseCase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [RetrieveItemsUseCaseModule.providers()]
    })
      .compileComponents().then(() => {
      http = TestBed.get(HttpClient);
      backend = TestBed.get(HttpTestingController);
      useCase = TestBed.get(RetrieveItemsUseCaseModule.HttpUseCase);
    });
  }));

  it(`should invoke async http request on uri "${RetrieveItemsUseCaseModule.HttpUseCase.API_PATH}"`, async(() => {
    const request = new RetrieveItemsUseCaseModule.PayloadBuilder()
      .page('1')
      .noOfRows('50')
      .build();
    useCase.execute(request).subscribe();
    backend.expectOne({
      url: RetrieveItemsUseCaseModule.HttpUseCase.API_PATH, method: 'GET'
    });
  }));

});
