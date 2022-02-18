import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageKey } from 'src/app/models/LocalStorageKey.model';
import { SessionWithUserPermissionDTO } from 'src/app/models/session-with-user-permissions-dto.model';
import { UserDTO } from 'src/app/models/user-dto.model';
import { UserGroups } from 'src/app/models/user-groups.enum';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-data-storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { LoginRequest } from '../../models/loginRequest.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoginOpen = true;

  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.checkAuth();
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



  close(value: boolean) {
    this.isLoginOpen = value;
  }
}
