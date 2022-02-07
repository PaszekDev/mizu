import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import {Router} from '@angular/router';
import {LocalStorageKey} from 'src/app/models/LocalStorageKey.model';
import {SessionWithUserPermissionDTO} from 'src/app/models/session-with-user-permissions-dto.model';
import {UserDTO} from 'src/app/models/user-dto.model';
import {UserGroups} from 'src/app/models/user-groups.enum';
import {AuthService} from 'src/app/services/auth.service';
import {LocalStorageService} from 'src/app/services/local-data-storage.service';
import {LoginRequest} from '../../models/loginRequest.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public registerForm!: FormGroup;
  public isLoginOpen = true;
  public groups = [
    {
      value: UserGroups.STUDENT,
    },
    {
      value: UserGroups.TEACHER,
    },
  ];

  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.checkAuth();
    this.initFormGroup();
    this.initRegisterForm();
  }

  private checkAuth(): void {
    if (
      this.localStorageService.get(LocalStorageKey.SESSION_KEY, localStorage)
    ) {
      this.authService.isAlive().subscribe((res) => {
        if (res) {
          this.router.navigate(['admin']);
        }
      });
    }
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

  initRegisterForm(): void {
    this.registerForm = this.fb.group({
      firstName: [
        null,
        [Validators.required, Validators.min(3), Validators.max(20)],
      ],
      lastName: [
        null,
        [Validators.required, Validators.min(2), Validators.max(30)],
      ],
      birthdate: [null, [Validators.required]],
      userGroup: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      confirm_email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.min(7), Validators.required]],
      confirm_password: [null, [Validators.required, Validators.min(7)]],
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
        )
        this.router.navigate(['admin']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmitRegister(): void {
    const user = {} as UserDTO;
    if (this.registerForm.valid) {
      user.firstName = this.registerForm.get('firstName')?.value;
      user.lastName = this.registerForm.get('lastName')?.value;
      user.password = this.registerForm.get('password')?.value;
      user.email = this.registerForm.get('email')?.value;
      user.userGroup = this.registerForm.get('userGroup')?.value;
      user.birthdate = this.registerForm.get('birthdate')?.value;
      this.authService.register(user).subscribe((res) => {
        this.isLoginOpen = true;
      });
    }
  }

  handleRegisterButton = (): void => {
    this.isLoginOpen = !this.isLoginOpen;
  };
}
