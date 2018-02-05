import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

export interface UseCase<I, O> {
  execute(request: I): O;
}

export abstract class AsyncUseCase<I, O> implements UseCase<I, Observable<O>> {
  constructor(protected http: HttpClient) {
  }
}
