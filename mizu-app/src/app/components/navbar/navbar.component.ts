import { Component, OnInit,Input  } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageKey} from 'src/app/models/LocalStorageKey.model';
import {AuthService} from 'src/app/services/auth.service';
import {LocalStorageService} from 'src/app/services/local-data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() title:String = "";
  @Input() avatarUrl:String = "";

  constructor(private localStorageService: LocalStorageService, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  logout = () => {
    this.authService.logout().subscribe(() => {
      localStorage.removeItem(LocalStorageKey.SESSION_KEY);
      this.router.navigate(['login']);
    })
  }
}
