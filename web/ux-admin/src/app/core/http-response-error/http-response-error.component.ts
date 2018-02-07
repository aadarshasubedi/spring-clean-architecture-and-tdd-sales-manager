import {Component, Input, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Violation} from '../../api';

@Component({
  selector: 'cloud-sales-http-response-error',
  templateUrl: './http-response-error.component.html',
  styleUrls: ['./http-response-error.component.scss']
})
export class HttpResponseErrorComponent implements OnInit {
  @Input()
  responseError: HttpErrorResponse;
  violations: Violation[];
  message: string;

  constructor() {
  }

  ngOnInit() {
    if (this.responseError) {
      this.translateResponseError(this.responseError);
    }
  }


  translateResponseError(err: HttpErrorResponse) {
    this.message = err.message;
  }
}
