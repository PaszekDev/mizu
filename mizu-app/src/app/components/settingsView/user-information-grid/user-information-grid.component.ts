import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/models/user-dto.model';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-information-grid',
  templateUrl: './user-information-grid.component.html',
  styleUrls: ['./user-information-grid.component.scss']
})
export class UserInformationGridComponent implements OnInit {

  user!: UserDTO;

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

}
