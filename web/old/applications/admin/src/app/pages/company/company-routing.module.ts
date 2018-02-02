import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateCompanyComponent} from "./create-company/create-company.component";

const routes: Routes = [
  {path: 'create', component: CreateCompanyComponent},
  {path: '', redirectTo: 'create', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {
}
