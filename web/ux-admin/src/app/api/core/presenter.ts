import {Observable} from 'rxjs/Observable';
import {HttpErrorResponse} from '@angular/common/http';

export interface Presenter<I> {
  present(response: I);
}

export interface ViewModel {
  violations: any[];
}

export class PresenterException extends Error {
  httpErrorResponse: HttpErrorResponse;

  constructor(message: string, httpErrorResponse: HttpErrorResponse) {
    super(message);
    this.httpErrorResponse = httpErrorResponse;
  }
}

export abstract class AsyncPresenter<I> implements Presenter<Observable<I>> {
  abstract present(response: Observable<I>);
}
