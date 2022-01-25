import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageKey } from 'src/app/models/LocalStorageKey.model';
import { SessionDTO } from 'src/app/models/sessionDTO.model';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-data-storage.service';
import {LoginRequest} from "../../models/loginRequest.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private authService: AuthService, private localStorageService: LocalStorageService) {}

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
      hasDoNotLogout: new FormControl(null),
    });
  }

  onSubmit() {
    const loginRequest = {} as LoginRequest;
    loginRequest.username = this.loginForm.get('username')?.value;
    loginRequest.password = this.loginForm.get('password')?.value;
    loginRequest.hasDoNotLogout = this.loginForm.get('logout')?.value;
    this.authService.login(loginRequest).subscribe(
      (res: SessionDTO) => {
        this.localStorageService.set(LocalStorageKey.SESSION_KEY,res.sessionKey,localStorage);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
