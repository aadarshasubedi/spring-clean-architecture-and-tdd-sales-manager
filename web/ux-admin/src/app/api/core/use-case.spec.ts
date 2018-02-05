import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AsyncHttpCommand, HttpCommandMethod, HttpContextBuilder} from './http-core';

describe('Use Case Design', () => {

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
    new AsyncHttpCommand(new HttpContextBuilder()
      .http(http)
      .uri('/api/foo')
      .method(HttpCommandMethod.GET).build())
      .execute({}).subscribe();
    backend.expectOne({
      url: '/api/foo', method: 'GET'
    });
  });
});
