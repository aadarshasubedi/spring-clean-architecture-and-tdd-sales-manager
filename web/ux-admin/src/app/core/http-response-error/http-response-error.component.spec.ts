import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpResponseErrorComponent} from './http-response-error.component';
import {ClarityModule} from '@clr/angular';

describe('HttpResponseErrorComponent', () => {
  let component: HttpResponseErrorComponent;
  let fixture: ComponentFixture<HttpResponseErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClarityModule],
      declarations: [HttpResponseErrorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpResponseErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
