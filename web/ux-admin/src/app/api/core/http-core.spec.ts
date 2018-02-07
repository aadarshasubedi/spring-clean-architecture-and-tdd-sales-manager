import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {async, TestBed} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AsyncHttpCommand, HttpCommandMethod, HttpContextBuilder} from './http-core';

describe('HttpCore Unit Tests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  });

  it('should invoke backend when given uri and httpClient with payload', async(() => {
    new AsyncHttpCommand(new HttpContextBuilder()
      .http(TestBed.get(HttpClient))
      .uri('/api/foo')
      .method(HttpCommandMethod.GET).build())
      .execute({}).subscribe();
    const backend = TestBed.get(HttpTestingController);
    backend.expectOne({
      url: '/api/foo', method: 'GET'
    });
  }));
});
