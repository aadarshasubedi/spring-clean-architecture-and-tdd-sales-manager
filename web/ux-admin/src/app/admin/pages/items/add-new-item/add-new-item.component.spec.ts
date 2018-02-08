import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddNewItemComponent} from './add-new-item.component';
import {CoreModule} from '../../../../core/core.module';
import {RouterTestingModule} from '@angular/router/testing';
import {Component, OnInit} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {Routes} from '@angular/router';
import {Violation} from '../../../../api';
import {ClarityModule} from '@clr/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AdminViewRoutes} from '../../../../domain/routes/routes';
import {By} from '@angular/platform-browser';
import {AddNewItemUseCaseModule} from '../../../../domain/items';

describe('AddNewItemComponent', () => {
  let component: AddNewItemComponent;
  let fixture: ComponentFixture<AddNewItemComponent>;

  beforeEach(async(() => {
    AddNewItemComponentUnitTests.setup().then(() => {
      fixture = TestBed.createComponent(AddNewItemComponent);
      component = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should rendered add new item form with needed fields', async(() => {
    const expectedRegisterFormFieldNames = [
      'code', 'name', 'description'
    ];
    expectedRegisterFormFieldNames.forEach(expectedField => {
      const de = fixture.debugElement.query(By.css('form input[formcontrolname="' + expectedField + '"]'));
      const textAreaDe = fixture.debugElement.query(By.css('form textarea[formcontrolname="' + expectedField + '"]'));
      let matchAny = false;
      if (de) {
        expect(de.attributes['id']).toBe(expectedField);
        matchAny = true;
      }
      if (textAreaDe) {
        expect(textAreaDe.attributes['id']).toBe(expectedField);
        matchAny = true;
      }
      expect(matchAny).toEqual(true);
    });
  }));

  it(`should code contains prefix "${AddNewItemUseCaseModule.UseCaseFormValidators.CODE_PREFIX}"`, async(() => {
    component.itemForm.setValue(AddNewItemComponentUnitTests.payloadWithCodeDoesNotContainsPrefix);
    fixture.detectChanges();
    fixture.whenStable().then(value => {
      expect(component.itemForm.controls['code'].valid).toEqual(false);
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


namespace AddNewItemComponentUnitTests {

  @Component({
    template: `
      <h1>Welcome to RouterTestComponent</h1>
    `
  })
  export class RouterTestComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

  }

  export const testRoutes: Routes = [
    {
      path: AdminViewRoutes.LIST_ITEMS,
      component: RouterTestComponent
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
      declarations: [AddNewItemComponent, RouterTestComponent],
      providers: []
    })
      .compileComponents();
  }

  export const validPayload = {};

  export const payloadWithCodeDoesNotContainsPrefix = new AddNewItemUseCaseModule.PayloadBuilder()
    .code('BHUWAN')
    .name('PaniPuri')
    .description('Lovely item for girls.')
    .build();

  export const payloadWithCodeDoesNotContainsPrefix = new AddNewItemUseCaseModule.PayloadBuilder()
    .code('CODE-BHUWAN')
    .name('PaniPuri')
    .description('Lovely item for girls.')
    .build();

  export const violations: Violation[] = [{
    path: 'name',
    message: 'name.already.exist'
  }];
}
