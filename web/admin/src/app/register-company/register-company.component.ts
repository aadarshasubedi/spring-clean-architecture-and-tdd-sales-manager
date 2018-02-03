import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClrWizard} from "@clr/angular";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register-company',
    templateUrl: './register-company.component.html',
    styleUrls: ['./register-company.component.scss']
})
export class RegisterCompanyComponent implements OnInit {
    companyForm = new FormGroup({
        name: new FormControl('', Validators.required),
        address: new FormGroup({
            postalCode: new FormControl('', Validators.required),
            country: new FormControl('', Validators.required)
        })
    });
    @ViewChild('registerCompanyWizard') wizard: ClrWizard;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    registerCompany() {
        console.log("Received register company action");
        if (this.companyForm.valid) {
            console.log("register company payload :", this.companyForm.value);
        }
    }

    goBackToHome() {
        this.router.navigate(['/home']);
    }
}
