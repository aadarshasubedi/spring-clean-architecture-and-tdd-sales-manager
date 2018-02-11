import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpResponseErrorComponent} from './http-response-error/http-response-error.component';
import {ClarityModule} from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule
  ],
  declarations: [HttpResponseErrorComponent],
  exports: [HttpResponseErrorComponent],
})
export class CoreModule {
}
