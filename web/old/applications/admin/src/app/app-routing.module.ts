import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'sales-manager', pathMatch: 'full'},
  {path: '**', redirectTo: 'sales-manager'},
  {path: 'sales-manager', loadChildren: './pages/pages.module#PagesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
