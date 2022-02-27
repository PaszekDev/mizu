import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/models/user-dto.model';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';
import { TranslateService } from 'src/app/core/translate-service.service';

@Component({
  selector: 'app-user-information-grid',
  templateUrl: './user-information-grid.component.html',
  styleUrls: ['./user-information-grid.component.scss']
})
export class UserInformationGridComponent implements OnInit {

  public closeTranslate: any;
  user!: UserDTO;

  constructor(private toastService: ToastService,
    private userService: UserService,
    private translateService: TranslateService
    ) { }

  ngOnInit(): void {
    this.getLoggedUser();
  }

  getLoggedUser() {
    this.closeTranslate = this.translateService.getTranslation('close');

    this.userService.getLoggedUser().subscribe((res) => {
      this.user = res;
    },
      err => this.toastService.showNotification(err.error, this.closeTranslate, "error"),       
    );
  }

}
