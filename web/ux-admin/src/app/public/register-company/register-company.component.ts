import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegisterNewCompanyUseCaseModule} from '../../domain/sales';
import {AbstractHttpUseCaseFormComponent} from '../../api';
import {ViewRoutes} from '../../domain/routes';

@Component({
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss']
})
export class RegisterCompanyComponent extends AbstractHttpUseCaseFormComponent implements OnInit {

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
              private useCase: RegisterNewCompanyUseCaseModule.HttpUseCase) {
    super();
  }

  ngOnInit() {
  }

  registerCompany() {
    this.turnOnLoading();
    console.log('Received register company action');
    if (this.companyForm.valid) {
      console.log('register company payload :', this.companyForm.value);
      this.useCase.execute(this.companyForm.value)
        .subscribe(
          value => this.router.navigate([ViewRoutes.DASHBOARD])
            .then(() => console.log('Successfully routed to dashboard.')),
          err => {
            this.turnOnError();
            this.httpResponseError = err;
          });
    }
  }

  goBackToHome() {
    this.router.navigate([ViewRoutes.HOME]);
  }

}
