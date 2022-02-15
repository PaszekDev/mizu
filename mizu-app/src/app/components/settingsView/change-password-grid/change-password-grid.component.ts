import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDTO } from 'src/app/models/user-dto.model';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password-grid',
  templateUrl: './change-password-grid.component.html',
  styleUrls: ['./change-password-grid.component.scss']
})
export class ChangePasswordGridComponent
  implements OnInit {

  hidePassword = true;
  user!: UserDTO;

  passwordForm = new FormGroup({
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[0-9])(?=.*[A-Z]).{5,}')]),
    confirmPassword: new FormControl(''),
    currentPassword: new FormControl('', [
      Validators.required
    ])
  })

  constructor(private toastService: ToastService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.getLoggedUser();
  }

  getLoggedUser() {
    this.userService.getLoggedUser().subscribe((res) => {
      this.user = res;
    },
      err => this.toastService.showNotification(err.error, "Close", "error"),
    );
  }

  onSubmit() {
    if (this.user != null) {
      if (this.isValid()) {
        const userTmp = {} as UserDTO;
        userTmp.password = this.passwordForm.get('currentPassword')?.value;
        this.checkIfCurrentPasswordIsValid(userTmp).then(() => this.updatePassword());
      }
    }
  }

  isValid(): boolean {
    if (this.passwordForm.invalid) {
      this.toastService.showNotification("Password must contain at least: \n - 5 letters, \n - 1 digit, \n - 1 upper case letter.", "Close", "error");
      return false;

    } else if (this.passwordForm.get('newPassword')?.value !== this.passwordForm.get('confirmPassword')?.value) {
      this.toastService.showNotification("Please confirm password", "Close", "error");
      return false;
    }
    return true;
  }

  checkIfCurrentPasswordIsValid(userTmp: UserDTO) {
    var promise = new Promise<void>((resolve, reject) => {
      this.userService.doesPasswordMatch('/update/password/matches', userTmp).subscribe(
        res => {
          resolve();
        },
        err => {
          this.toastService.showNotification(err.error, "Close", "error");
          reject();
        }
      );
    })

    return promise;
  }

  updatePassword() {
    this.user.password = this.passwordForm.get('newPassword')?.value;

    this.userService.updateUser('/update/password', this.user).subscribe(
      (data: any) => {
        this.toastService.showNotification("Password changed succesfully", "Close", "success")
      },
      (err: any) => {
        this.toastService.showNotification(err.error, "Close", "error");
      });
  }
}
