import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AbstractHttpUseCaseFormComponent} from '../../api';
import {LoginUseCaseModule} from '../../domain/securities';
import {ViewRoutes} from '../../domain/routes';
import {Router} from '@angular/router';
import {SessionHandleUseCaseModule} from '../../domain/securities/session-handle-usecase-module';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AbstractHttpUseCaseFormComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    rememberMe: new FormControl()
  });

  constructor(private router: Router,
              private loginUseCase: LoginUseCaseModule.HttpUseCase,
              private initializeLocalSessionUseCase: SessionHandleUseCaseModule.InitializeLocalSessionUseCase) {
    super();
  }

  ngOnInit() {
  }

  doLogin() {
    this.turnOnLoading();
    if (this.loginForm.valid) {
      this.loginUseCase.execute(this.loginForm.value)
        .subscribe(
          value => {
            this.initializeLocalSessionUseCase.execute(value);
            this.router.navigate([ViewRoutes.DASHBOARD])
              .then(() => console.log('Successfully routed to dashboard.'));
          },
          err => {
            this.turnOnError();
            this.httpResponseError = err;
          });
    }
  }
}
