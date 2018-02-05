import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('Form Core Design', () => {

  let http: HttpClient;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents().then(() => {
      http = TestBed.get(HttpClient);
      backend = TestBed.get(HttpTestingController);
    });
  });

  it('should invoke backend when given uri and httpClient with payload', () => {

  });
});
