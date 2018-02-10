import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListItemsComponent} from './list-items.component';
import {ClarityModule} from '@clr/angular';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RetrieveItemsUseCaseModule} from '../../../../domain/items/usecase/list-items';
import {By} from '@angular/platform-browser';

describe('[ListItemsComponent] Unit Tests', () => {
  let component: ListItemsComponent;
  let fixture: ComponentFixture<ListItemsComponent>;

  beforeEach(async(() => {
    ListItemsComponentUnitTests.setup().then(() => {
      fixture = TestBed.createComponent(ListItemsComponent);
      component = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render list of items on grid has need columns`, async(() => {
    fixture.debugElement.query(By.css('table'));
  }));
});

namespace ListItemsComponentUnitTests {

  export function setup() {
    return TestBed.configureTestingModule({
      imports: [
        ClarityModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      declarations: [ListItemsComponent],
      providers: [RetrieveItemsUseCaseModule.providers()]
    })
      .compileComponents();
  }

}
