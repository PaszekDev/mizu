import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LoginRequest} from '../models/loginRequest.model';
import {SessionDTO} from '../models/sessionDTO.model';
import {UserDTO} from '../models/user-dto.model';
import {LocalStorageService} from './local-data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  resourceUrl: string = 'http://localhost:8081/api/auth/';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
  }

  login(loginRequest: LoginRequest): Observable<SessionDTO> {
    return this.http.post<SessionDTO>(this.resourceUrl + 'login', loginRequest);
  }

  register(user: UserDTO) {
    return this.http.post(this.resourceUrl + 'register', user);
  }

  logout() {
    const sessionKey = this.localStorageService.getSessionKey();
    return this.http.delete(this.resourceUrl + 'logout', {
      headers: {sessionKey: sessionKey},
    });
  }

  isAlive(): Observable<boolean> {
    const sessionDTO = {} as SessionDTO;
    sessionDTO.sessionKey = this.localStorageService.getSessionKey();
    return this.http.post<boolean>(
      this.resourceUrl + 'check-alive-session',
      sessionDTO
    );
  }

  isLogin() {
    const sessionDTO = {} as SessionDTO;
    sessionDTO.sessionKey = this.localStorageService.getSessionKey();
    return this.http.post<boolean>(
      this.resourceUrl + 'check-alive-session',
      sessionDTO
    );
  }
}
