import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterCompanyComponent} from './register-company.component';
import {ClarityModule} from '@clr/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {RegisterNewCompanyUseCaseModule, ViewRoutes} from '../sales-model';
import {Router, Routes} from '@angular/router';
import {Component, OnInit} from '@angular/core';

describe('Register Company Unit Tests', () => {
  let component: RegisterCompanyComponent;
  let fixture: ComponentFixture<RegisterCompanyComponent>;
  let useCase: RegisterNewCompanyUseCaseModule.HttpUseCase;
  let router: Router;

  beforeEach(async(() => {
    RegisterCompanyUnitTests.setup().then(() => {
      fixture = TestBed.createComponent(RegisterCompanyComponent);
      component = fixture.componentInstance;
      useCase = TestBed.get(RegisterNewCompanyUseCaseModule.HttpUseCase);
      router = TestBed.get(Router);
    });
  }));

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should rendered register company form with needed fields', async(() => {
    const expectedRegisterFormFieldNames = [
      'name', 'country', 'stateCode', 'address', 'telephone', 'email', 'beginningOfYear', 'contactPerson'
    ];
    expectedRegisterFormFieldNames.forEach(expectedField => {
      const de = fixture.debugElement.query(By.css('form input[formcontrolname="' + expectedField + '"]'));
      expect(de.attributes['id']).toBe(expectedField);
    });
  }));

  it('should not called when click on finish button with invalid form', async(() => {
    const finishButton = fixture.debugElement.query(By.css('clr-wizard-button[ng-reflect-type="finish"] button'));
    finishButton.nativeElement.click();
    spyOn(useCase, 'execute').and.returnValue(Observable.of({}));
    expect(useCase.execute).toHaveBeenCalledTimes(0);
  }));

  it(`when click on finish button with valid form then should navigated to "${ViewRoutes.DASHBOARD}"`, async(() => {
    const finishButton = fixture.debugElement.query(By.css('clr-wizard-button[ng-reflect-type="finish"] button'));
    const payload = new RegisterNewCompanyUseCaseModule.PayloadBuilder()
      .name('GorkhasLab')
      .address('KTM')
      .beginningOfYear(2016)
      .contactPerson('Bhuwan P. Upadhyay')
      .email('bhuwan.upadhyay49@gmail.com')
      .country('Nepal')
      .stateCode('01')
      .telephone('9848490976')
      .build();
    spyOn(useCase, 'execute').and.returnValue(Observable.of({}));
    component.companyForm.setValue(payload);
    finishButton.nativeElement.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(router.url).toEqual(ViewRoutes.DASHBOARD);
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

namespace RegisterCompanyUnitTests {

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
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(testRoutes)
      ],
      declarations: [RegisterCompanyComponent, DashboardComponent],
      providers: [RegisterNewCompanyUseCaseModule.HttpUseCase, RegisterNewCompanyUseCaseModule.ViewPresenter]
    })
      .compileComponents();
  }

}
