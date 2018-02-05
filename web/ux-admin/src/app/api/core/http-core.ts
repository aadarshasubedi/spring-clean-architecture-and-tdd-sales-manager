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

  protected build(): HttpContext {
    return new HttpContext(this._http, this._uri, this._method);
  }

}

export class HttpContext {
  private _http: HttpClient;
  private _uri: string;
  private _method: HttpCommandMethod;

  constructor(http: HttpClient,
              uri: string,
              method: HttpCommandMethod) {
    this._http = http;
    this._uri = uri;
    this._method = method;
  }

  get http(): HttpClient {
    return this._http;
  }

  get method(): HttpCommandMethod {
    return this._method;
  }

  get uri(): string {
    return this._uri;
  }
}

export enum HttpCommandMethod {GET, POST}

abstract class HttpCommand<I, O> {
  private context: HttpContext;


  constructor(context: HttpContext) {
    this.context = context;
  }

  abstract execute(commandPayload: I): O;
}

export class AsyncHttpCommand<I, O> extends HttpCommand<I, Observable<O>> {
  constructor(private context: HttpContext) {
    super(context);
  }

  execute(commandPayload: I): Observable<O> {
    if (this.context.method === HttpCommandMethod.GET) {
      return this.context.http.get(this.context.uri);
    } else if (this.context.method === HttpCommandMethod.POST) {
      return this.context.http.post(this.context.uri, commandPayload);
    } else {
      throw new Error('Unsupported http method type' + this.context.method);
    }
  }
}
