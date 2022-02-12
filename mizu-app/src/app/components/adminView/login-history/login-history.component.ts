import { Component, OnInit } from '@angular/core';
import { LoginHistoryDTO } from 'src/app/models/loginHistory-dto.model';
import { LoginHistoryService } from 'src/app/services/login-history.service';

@Component({
  selector: 'app-login-history',
  templateUrl: './login-history.component.html',
  styleUrls: ['./login-history.component.scss']
})
export class LoginHistoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'email', 'loginDate', 'remoteAddress'];
  loginHistory!: LoginHistoryDTO[];

  constructor(private loginHistoryService: LoginHistoryService) { }

  ngOnInit(): void {
    this.getLoginHistory();
  }

  getLoginHistory() {
    this.loginHistoryService.getAll().subscribe(data => {
      this.loginHistory = data;
    });
  }
}
