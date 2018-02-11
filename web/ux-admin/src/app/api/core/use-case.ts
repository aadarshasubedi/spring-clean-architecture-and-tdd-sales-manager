import {Observable} from 'rxjs/Observable';

export interface UseCase<I, O> {
  execute(request: I): O;
}

export abstract class AsyncUseCase<I, O> implements UseCase<I, Observable<O>> {
  abstract execute(request: I): Observable<O>;
}
