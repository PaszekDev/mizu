import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-help-grid',
  templateUrl: './help-grid.component.html',
  styleUrls: ['./help-grid.component.scss']
})
export class HelpGridComponent implements OnInit {

  helpForm = new FormGroup({
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
      ]),
  })

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  }

  onSubmit() {
      if (this.helpForm.invalid) {
        this.toastService.showNotification("Message must contain altleast 10 characters.", "Close", "error");
        return
      }

      this.toastService.showNotification("Message sent succesfully", "Close", "success");

      //To Do implement sending email
  }

}
