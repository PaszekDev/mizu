import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/loginRequest.model';
import { SessionDTO } from '../models/sessionDTO.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  resourceUrl: string = "http://localhost:8081/api/auth/"

  constructor(private http:HttpClient) { }

  login(loginRequest:LoginRequest): Observable<SessionDTO> {
    return this.http.post<SessionDTO>(this.resourceUrl+"login",loginRequest);
  }
}
