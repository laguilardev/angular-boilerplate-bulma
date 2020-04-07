import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService, LoginResponse } from '@services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  public isSubmitingForm: boolean = false;

  get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  constructor(
    private formBuilder: FormBuilder,
    private authSrv: AuthService
  ) { }

  private createForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public submit(): void {
    if (this.form.invalid) return;

    this.isSubmitingForm = true;

    this.authSrv.login(this.form.value).subscribe( res => {
      setTimeout(() => {
        this.isSubmitingForm = false;
      }, 1500);
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

}
