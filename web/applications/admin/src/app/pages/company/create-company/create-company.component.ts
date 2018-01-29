import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpRegisterNewCompanyUseCaseEndpointInvoker} from '@devbhuwan-salesmanager/sales-api';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {

  companyForm: FormGroup;

  constructor(private fb: FormBuilder,
              private httpRegisterNewCompanyUseCaseEndpointInvoker: HttpRegisterNewCompanyUseCaseEndpointInvoker) {
  }

  ngOnInit() {
    // console.log(RegisterNewCompanyRequest.name);
    this.companyForm = this.fb.group({
      'name': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'description': new FormControl(''),
      'gender': new FormControl('', Validators.required)
    });
  }

  createCompany(company: any) {
    this.httpRegisterNewCompanyUseCaseEndpointInvoker.invoke(company);
  }
}
