import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegisterNewCompanyUseCaseModule, ViewRoutes} from '../sales-model';

@Component({
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss']
})
export class RegisterCompanyComponent implements OnInit {
  companyForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    stateCode: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    contactPerson: new FormControl('', Validators.required),
    beginningOfYear: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  constructor(private router: Router,
              private useCase: RegisterNewCompanyUseCaseModule.HttpUseCase,
              private presenter: RegisterNewCompanyUseCaseModule.ViewPresenter) {
  }

  ngOnInit() {
  }

  registerCompany() {
    console.log('Received register company action');
    if (this.companyForm.valid) {
      console.log('register company payload :', this.companyForm.value);
      this.presenter.present(this.useCase.execute(this.companyForm.value));
    }
  }

  goBackToHome() {
    this.router.navigate([ViewRoutes.HOME]);
  }
}
