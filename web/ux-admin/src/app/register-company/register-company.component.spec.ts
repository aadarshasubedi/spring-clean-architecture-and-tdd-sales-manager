import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterCompanyComponent} from './register-company.component';
import {APP_BASE_HREF} from '@angular/common';
import {ClarityModule} from '@clr/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';
import {HttpRegisterNewCompanyUseCase} from '../api/index';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {RegisterNewCompanyRequest} from '../sales-model';

describe('RegisterCompanyComponent', () => {
  let component: RegisterCompanyComponent;
  let fixture: ComponentFixture<RegisterCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClarityModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [RegisterCompanyComponent],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}, HttpRegisterNewCompanyUseCase]
    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(RegisterCompanyComponent);
      component = fixture.componentInstance;
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
      console.log('FIELD > ', expectedField);
      const de = fixture.debugElement.query(By.css('form input[formcontrolname="' + expectedField + '"]'));
      expect(de.attributes['id']).toBe(expectedField);
    });
  }));

  it('should not called register new company use case when click on finish button with invalid form', async(() => {
    const finishButton = fixture.debugElement.query(By.css('clr-wizard-button[ng-reflect-type="finish"] button'));
    finishButton.nativeElement.click();
    const useCase = TestBed.get(HttpRegisterNewCompanyUseCase);
    spyOn(useCase, 'execute').and.returnValue(Observable.of({}));
    expect(useCase.execute).toHaveBeenCalledTimes(0);
  }));

  it('should called register new company use case when click on finish button with valid form', async(() => {
    const finishButton = fixture.debugElement.query(By.css('clr-wizard-button[ng-reflect-type="finish"] button'));
    const validPayload: RegisterNewCompanyRequest = {
      address: 'KTM', beginningOfYear: 2016, contactPerson: 'Bhuwan P. Upadhyay', email: 'bhuwan.upadhyay49@gmail.com',
      country: 'Nepal', stateCode: '01', telephone: '9848490976', name: 'GorkhasLab'
    };
    component.companyForm.setValue(validPayload);
    finishButton.nativeElement.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const useCase = TestBed.get(HttpRegisterNewCompanyUseCase);
      spyOn(useCase, 'execute').and.returnValue(Observable.of({}));
      expect(useCase.execute).toHaveBeenCalledTimes(1);
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
