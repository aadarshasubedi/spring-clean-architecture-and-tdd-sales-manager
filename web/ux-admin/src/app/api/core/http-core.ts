import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

interface HasClient {
  http(http: HttpClient): HasUri;
}

interface HasUri {
  uri(uri: string): HasMethod;
}

interface HasMethod {
  method(method: HttpCommandMethod): CanBuild;
}

interface CanBuild {
  build(): HttpContext;
}

export class HttpContextBuilder implements HasClient, HasUri, HasMethod, CanBuild {

  private _http: HttpClient;
  private _uri: string;
  private _method: HttpCommandMethod;

  http(http: HttpClient): HasUri {
    this._http = http;
    return this;
  }

  uri(uri: string): HasMethod {
    this._uri = uri;
    return this;
  }

  method(method: HttpCommandMethod): CanBuild {
    this._method = method;
    return this;
  }

  build(): HttpContext {
    return new HttpContext(this._http, this._uri, this._method);
  }

}

export class HttpContext {
  constructor(http: HttpClient,
              uri: string,
              method: HttpCommandMethod) {
    this._http = http;
    this._uri = uri;
    this._method = method;
  }

  private _http: HttpClient;

  get http(): HttpClient {
    return this._http;
  }

  private _uri: string;

  get uri(): string {
    return this._uri;
  }

  private _method: HttpCommandMethod;

  get method(): HttpCommandMethod {
    return this._method;
  }
}

export enum HttpCommandMethod {GET, POST}

abstract class HttpCommand<I, O> {
  abstract execute(commandPayload: I): O;
}

export class AsyncHttpCommand<I, O> extends HttpCommand<I, Observable<O>> {
  constructor(private context: HttpContext) {
    super();
  }

  execute(commandPayload: I): Observable<O> {
    if (this.context.method === HttpCommandMethod.GET) {
      return this.context.http.get<O>(this.context.uri);
    } else if (this.context.method === HttpCommandMethod.POST) {
      return this.context.http.post<O>(this.context.uri, commandPayload);
    } else {
      throw new Error('Unsupported http method type' + this.context.method);
    }
  }
}
