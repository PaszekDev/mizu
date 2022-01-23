import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.min(5),
        Validators.max(30),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.min(5),
        Validators.max(40),
      ]),
    });
  }

  onSubmit() {
    console.log(this.loginForm);
  }
}
