import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ClarityModule} from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    PagesRoutingModule
  ],
  declarations: [MainLayoutComponent, DashboardComponent]
})
export class PagesModule {
}
