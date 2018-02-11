import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from './public/about/about.component';
import {HomeComponent} from './public/home/home.component';
import {RegisterCompanyComponent} from './public/register-company/register-company.component';
import {LoginComponent} from './public/login/login.component';
import {ViewRoutes} from './domain/routes';


export const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'register-your-company', component: RegisterCompanyComponent},
  {path: ViewRoutes.ADMIN_BASE, loadChildren: './admin/pages/pages.module#PagesModule'}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
