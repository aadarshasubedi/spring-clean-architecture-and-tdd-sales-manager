import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {RegisterCompanyComponent} from "./register-company/register-company.component";


export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'register-your-company', component: RegisterCompanyComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
