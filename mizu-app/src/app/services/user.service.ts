import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDTO } from '../models/user-dto.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../models/abstraction/base-service.service';
import { LocalStorageService } from './local-data-storage.service';
import { EmailRequest } from '../models/email-request';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService<UserDTO> {

  constructor(protected http: HttpClient,
    private localStorageService: LocalStorageService) {
    super(http, 'user');
  }

  getAllByUserGroup(userGroup: string): Observable<UserDTO[]> {
    return this.http
      .get<GetResponse>(this.resourceUrl + '/group/' + userGroup)
      .pipe(map((response) => response.content));
  }

  getAllByUserGroups(userGroups: string[]) {
    return this.http.post<UserDTO[]>(this.resourceUrl + '/group', userGroups);
  }

  getLoggedUser() {
    return this.http.get<UserDTO>(this.resourceUrl + '/logged');
  }

  sendEmail(emailRequest: EmailRequest) {
    return this.http.post<EmailRequest>(this.resourceUrl + '/email', emailRequest);
  }
}

interface GetResponse {
  content: UserDTO[];
}
