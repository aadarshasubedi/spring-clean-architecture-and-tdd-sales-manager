import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterCompanyComponent} from './register-company.component';
import {APP_BASE_HREF} from '@angular/common';
import {ClarityModule} from '@clr/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('RegisterCompanyComponent', () => {
  let component: RegisterCompanyComponent;
  let fixture: ComponentFixture<RegisterCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClarityModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [RegisterCompanyComponent],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(RegisterCompanyComponent);
      component = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('shoud rendered register company form with needed fields', async(() => {

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
