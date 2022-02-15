import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/models/abstraction/base-component.service';
import { UserDTO } from 'src/app/models/user-dto.model';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-email-grid',
  templateUrl: './change-email-grid.component.html',
  styleUrls: ['./change-email-grid.component.scss']
})
export class ChangeEmailGridComponent
  implements OnInit {

  user!: UserDTO;

  emailForm = new FormGroup({
    newEmail: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    confirmEmail: new FormControl('')
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
        this.updateEmail()
      }
    }
  }

  isValid(): boolean {
    if (this.emailForm.invalid) {
      this.toastService.showNotification("Please enter correct email", "Close", "error");
      return false

    } else if (this.emailForm.get('newEmail')?.value !== this.emailForm.get('confirmEmail')?.value) {
      this.toastService.showNotification("Please confirm email", "Close", "error");
      return false
    }
    return true;
  }

  updateEmail() {
    this.user.email = this.emailForm.get('newEmail')?.value;

    this.userService.updateUser('/update', this.user).subscribe(
      (res: any) => { 
        this.toastService.showNotification("Email changed succesfully", "Close", "success") 
      },
      (err: any) => {
          this.toastService.showNotification("Something went wrong", "Close", "error");
      });
  }
}
