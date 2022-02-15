import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailRequest } from 'src/app/models/email-request';
import { UserDTO } from 'src/app/models/user-dto.model';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-help-grid',
  templateUrl: './help-grid.component.html',
  styleUrls: ['./help-grid.component.scss']
})
export class HelpGridComponent implements OnInit {

  user!: UserDTO;

  helpForm = new FormGroup({
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
  })

  constructor(private toastService: ToastService, private userService: UserService) { }

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
      if (this.helpForm.invalid) {
        this.toastService.showNotification("Message must contain atleast 10 characters \nSubject is required", "Close", "error");
        return
      }
      this.sendEmail();
    }
  }

  sendEmail() {

    const emailRequest = {} as EmailRequest;

    emailRequest.from = this.user.email;
    emailRequest.subject = this.user.firstName
      + " "
      + this.user.lastName
      + ": "
      + this.helpForm.get('subject')?.value;
    emailRequest.message = this.helpForm.get('message')?.value;

    this.userService.sendEmail(emailRequest).subscribe(
      (data: any) => {
        this.toastService.showNotification("Email send successfully", "Close", "success")
      },
      (err: any) => {
        this.toastService.showNotification(err.error, "Close", "error");
      });
  }
}
