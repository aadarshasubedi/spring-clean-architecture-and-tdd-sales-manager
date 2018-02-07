import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';
import {AppComponent} from './app.component';
import {ROUTING} from './app.routing';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {RegisterCompanyComponent} from './register-company/register-company.component';
import {HttpClientModule} from '@angular/common/http';
import {RegisterNewCompanyUseCaseModule} from './sales-model';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    RegisterCompanyComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClarityModule,
    ROUTING
  ],
  providers: [...RegisterNewCompanyUseCaseModule.providers()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
