import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {async, TestBed} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AddNewItemUseCaseModule} from './add-new-item-usecase-module';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

describe(`${AddNewItemUseCaseModule.moduleName} Unit Tests`, () => {

  let http: HttpClient;
  let backend: HttpTestingController;
  let useCase: AddNewItemUseCaseModule.HttpUseCase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [AddNewItemUseCaseModule.providers()]
    })
      .compileComponents().then(() => {
      http = TestBed.get(HttpClient);
      backend = TestBed.get(HttpTestingController);
      useCase = TestBed.get(AddNewItemUseCaseModule.HttpUseCase);
    });
  }));

  it(`should invoke async http request on uri "${AddNewItemUseCaseModule.HttpUseCase.API_PATH}"`, async(() => {
    const request = new AddNewItemUseCaseModule.PayloadBuilder()
      .name('Bhuwan P. Upadhyay')
      .build();
    useCase.execute(request).subscribe();
    backend.expectOne({
      url: AddNewItemUseCaseModule.HttpUseCase.API_PATH, method: 'POST'
    });
  }));

});
