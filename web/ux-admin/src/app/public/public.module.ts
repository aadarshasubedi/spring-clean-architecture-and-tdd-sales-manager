import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterCompanyComponent} from './register-company/register-company.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ClarityModule} from '@clr/angular';
import {RegisterNewCompanyUseCaseModule} from '../domain/sales';
import {RouterModule} from '@angular/router';
import {CoreModule} from '../core/core.module';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginUseCaseModule} from '../domain/securities';
import {SessionHandleUseCaseModule} from '../domain/securities/session-handle-usecase-module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule,
    CoreModule,
    ReactiveFormsModule
  ],
  declarations: [
    AboutComponent,
    HomeComponent,
    RegisterCompanyComponent,
    LoginComponent
  ],
  exports: [
    AboutComponent,
    HomeComponent,
    RegisterCompanyComponent,
    LoginComponent
  ],
  providers: [
    ...RegisterNewCompanyUseCaseModule.providers(),
    ...LoginUseCaseModule.providers(),
    ...SessionHandleUseCaseModule.providers()
  ],
})
export class PublicModule {
}
