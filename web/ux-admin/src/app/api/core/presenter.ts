import {Observable} from 'rxjs/Observable';

export interface Presenter<I> {
  present(response: I);
}

export interface ViewModel {
  violations: any[];
}

export abstract class AsyncPresenter<I> implements Presenter<Observable<I>> {

}
