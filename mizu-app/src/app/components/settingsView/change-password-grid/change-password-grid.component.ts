import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/models/abstraction/base-component.service';
import { UserDTO } from 'src/app/models/user-dto.model';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password-grid',
  templateUrl: './change-password-grid.component.html',
  styleUrls: ['./change-password-grid.component.scss']
})
export class ChangePasswordGridComponent
  extends BaseComponent<UserDTO>
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

  constructor(protected http: HttpClient, private toastService: ToastService, private userService: UserService) {
    super(http, 'user/update/password');
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
    if(this.user!=null) {
      if (this.isValid()) {
        this.updatePassword()
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

  updatePassword() {
    this.user.password = this.passwordForm.get('newPassword')?.value;

    var param: HttpParams = new HttpParams();
    param = param.set('password', this.passwordForm.get('currentPassword')?.value);

    this.update(this.user,param).subscribe(
      (data: any) => { 
        this.toastService.showNotification("Password changed succesfully", "Close", "success") 
      },
      (err: any) => {
          this.toastService.showNotification(err.error, "Close", "error");
      });
  }
}
