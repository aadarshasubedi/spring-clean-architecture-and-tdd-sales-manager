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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


namespace AddNewItemComponentUnitTests {

  @Component({
    template: `
      <h1>Welcome to dashboard</h1>
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
      path: 'dashboard',
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

  export const violations: Violation[] = [{
    path: 'name',
    message: 'name.already.exist'
  }];
}
