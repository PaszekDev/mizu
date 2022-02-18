import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/models/user-dto.model';
import { UserGroups } from 'src/app/models/user-groups.enum';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-grid',
  templateUrl: './register-grid.component.html',
  styleUrls: ['./register-grid.component.scss'],
})
export class RegisterGridComponent implements OnInit {
  public registerForm!: FormGroup;
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
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initRegisterForm();
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
        this.close();
      });
    }
  }

  close() {
    this.router.navigate(['login']);
  }
}
