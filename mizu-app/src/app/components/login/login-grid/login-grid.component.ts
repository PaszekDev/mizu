import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageKey } from 'src/app/models/LocalStorageKey.model';
import { LoginRequest } from 'src/app/models/loginRequest.model';
import { SessionWithUserPermissionDTO } from 'src/app/models/session-with-user-permissions-dto.model';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-data-storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login-grid',
  templateUrl: './login-grid.component.html',
  styleUrls: ['./login-grid.component.scss'],
})
export class LoginGridComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
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

  onSubmit(): void {
    const loginRequest = {} as LoginRequest;
    loginRequest.email = this.loginForm.get('email')?.value;
    loginRequest.password = this.loginForm.get('password')?.value;
    loginRequest.hasDoNotLogout = this.loginForm.get('logout')?.value;
    this.authService.login(loginRequest).subscribe(
      (res: SessionWithUserPermissionDTO) => {
        this.localStorageService.set(
          LocalStorageKey.SESSION_KEY,
          res.sessionKey,
          localStorage
        );
        this.localStorageService.set(
          LocalStorageKey.USER_PERMISSIONS,
          JSON.stringify(res.userGroupPermissionDTOS),
          localStorage
        );
        this.router.navigate(['admin']);
      },
      (err) => {
        this.toastService.showNotification(err.error, 'Close', 'error');
      }
    );
  }

  close() {
    this.router.navigate(['register']);
  }

}
