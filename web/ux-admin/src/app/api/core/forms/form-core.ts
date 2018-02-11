import {HttpErrorResponse} from '@angular/common/http';

export abstract class AbstractHttpUseCaseFormComponent {
  httpResponseError: HttpErrorResponse;
  loadingFlag = false;
  errorFlag = false;

  protected turnOnLoading() {
    this.loadingFlag = true;
    this.errorFlag = false;
  }

  protected turnOnError() {
    this.loadingFlag = false;
    this.errorFlag = true;
  }
}
