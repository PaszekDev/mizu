import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginHistoryDTO } from '../models/loginHistory-dto.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginHistoryService {

  private loginHistoryUrl: string;

  constructor(private http: HttpClient) {
    this.loginHistoryUrl = "http://localhost:8081/api/history/login"
  }

  getAll(): Observable<LoginHistoryDTO[]> {
    return this.http.get<GetResponse>(this.loginHistoryUrl).pipe(
      map(response => response.content)
    );
  }
}

interface GetResponse {
  content: LoginHistoryDTO[];
}
