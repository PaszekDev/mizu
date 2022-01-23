import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor() {
   }

  ngOnInit(): void {
      this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.loginForm);
}

}
