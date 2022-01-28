import {Injectable} from '@angular/core';
import {CanActivate, Router,} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  private isAlive: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  canActivate(): Observable<boolean> {
    return this.authService.isAlive();
  }
}
