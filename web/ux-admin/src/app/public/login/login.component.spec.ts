import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {CoreModule} from '../../core/core.module';
import {Component, OnInit} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {Router, Routes} from '@angular/router';
import {Violation} from '../../api';
import {ClarityModule} from '@clr/angular';
import {RegisterNewCompanyUseCaseModule} from '../../domain/sales';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LoginUseCaseModule} from '../../domain/securities';
import {SessionHandleUseCaseModule} from '../../domain/securities/session-handle-usecase-module';

describe('LoginComponent Unit Tests', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let useCase: LoginUseCaseModule.HttpUseCase;
  let router: Router;

  beforeEach(async(() => {
    LoginComponentUnitTests.setup().then(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      useCase = TestBed.get(LoginUseCaseModule.HttpUseCase);
      router = TestBed.get(Router);
    });
  }));

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

namespace LoginComponentUnitTests {

  @Component({
    template: `
      <h1>Welcome to dashboard</h1>
    `
  })
  export class DashboardComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

  }

  export const testRoutes: Routes = [
    {
      path: 'dashboard',
      component: DashboardComponent
    }
  ];

  export function setup() {
    return TestBed.configureTestingModule({
      imports: [
        ClarityModule,
        NoopAnimationsModule,
        CoreModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(testRoutes)
      ],
      declarations: [LoginComponent, DashboardComponent],
      providers: [LoginUseCaseModule.providers(), SessionHandleUseCaseModule.providers()]
    })
      .compileComponents();
  }

  export const validPayload = new RegisterNewCompanyUseCaseModule.PayloadBuilder()
    .name('GorkhasLab')
    .address('KTM')
    .beginningOfYear(2016)
    .contactPerson('Bhuwan P. Upadhyay')
    .email('bhuwan.upadhyay49@gmail.com')
    .country('Nepal')
    .stateCode('01')
    .telephone('9848490976')
    .build();

  export const violations: Violation[] = [{
    path: 'name',
    message: 'name.already.exist'
  }];
}
