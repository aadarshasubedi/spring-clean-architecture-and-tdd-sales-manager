import {AppComponent} from "../app.component";
import {ROUTING} from "../app.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "../home/home.component";
import {NgModule} from "@angular/core";
import {RegisterCompanyComponent} from "../register-company/register-company.component";
import {AboutComponent} from "../about/about.component";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        RegisterCompanyComponent
    ],
    imports: [
        ReactiveFormsModule,
        ROUTING
    ],
})
export class AppTestingModule {
}
