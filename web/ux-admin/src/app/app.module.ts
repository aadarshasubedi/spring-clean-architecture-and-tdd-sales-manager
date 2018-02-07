import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';
import {AppComponent} from './app.component';
import {ROUTING} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {PublicModule} from './public/public.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    CoreModule,
    HttpClientModule,
    ClarityModule,
    PublicModule,
    ROUTING
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
