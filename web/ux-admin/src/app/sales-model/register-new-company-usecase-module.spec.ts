import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {async, fakeAsync, TestBed} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RegisterNewCompanyUseCaseModule} from './register-new-company-usecase-module';
import {ViewRoutes} from './routes';
import {RouterTestingModule} from '@angular/router/testing';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import {Router, Routes} from '@angular/router';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';

describe('Register New Company Use Case Unit Tests', () => {

  let http: HttpClient;
  let backend: HttpTestingController;
  let useCase: RegisterNewCompanyUseCaseModule.HttpUseCase;
  let viewPresenter: RegisterNewCompanyUseCaseModule.ViewPresenter;
  let router: Router;

  const testRoutes: Routes = [
    {
      path: 'dashboard',
      component: DashboardComponent
    }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes(testRoutes),
        HttpClientTestingModule
      ],
      providers: [RegisterNewCompanyUseCaseModule.HttpUseCase, RegisterNewCompanyUseCaseModule.ViewPresenter]
    })
      .compileComponents().then(() => {
      http = TestBed.get(HttpClient);
      router = TestBed.get(Router);
      backend = TestBed.get(HttpTestingController);
      useCase = TestBed.get(RegisterNewCompanyUseCaseModule.HttpUseCase);
      viewPresenter = TestBed.get(RegisterNewCompanyUseCaseModule.ViewPresenter);
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

  it(`should navigated to "${ViewRoutes.DASHBOARD}" when http response has ok status`, fakeAsync(() => {
    viewPresenter.present(Observable.of());
  }));


});
