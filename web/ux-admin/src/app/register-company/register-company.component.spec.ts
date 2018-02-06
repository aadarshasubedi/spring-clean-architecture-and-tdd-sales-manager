import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterCompanyComponent} from './register-company.component';
import {APP_BASE_HREF} from '@angular/common';
import {ClarityModule} from '@clr/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {RegisterNewCompanyUseCaseModule} from '../sales-model';

describe('RegisterCompanyComponent', () => {
  let component: RegisterCompanyComponent;
  let fixture: ComponentFixture<RegisterCompanyComponent>;
  let useCase: RegisterNewCompanyUseCaseModule.HttpUseCase;

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
      providers: [{provide: APP_BASE_HREF, useValue: '/'}, RegisterNewCompanyUseCaseModule.HttpUseCase]
    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(RegisterCompanyComponent);
      component = fixture.componentInstance;
      useCase = TestBed.get(RegisterNewCompanyUseCaseModule.HttpUseCase);
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

  it('should not called ' + RegisterNewCompanyUseCaseModule.HttpUseCase.name
    + ' when click on finish button with invalid form', async(() => {
    const finishButton = fixture.debugElement.query(By.css('clr-wizard-button[ng-reflect-type="finish"] button'));
    finishButton.nativeElement.click();
    spyOn(useCase, 'execute').and.returnValue(Observable.of({}));
    expect(useCase.execute).toHaveBeenCalledTimes(0);
  }));

  it('should called ' + RegisterNewCompanyUseCaseModule.HttpUseCase.name
    + ' when click on finish button with valid form', async(() => {
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
      expect(useCase.execute).toHaveBeenCalledWith(payload);
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
