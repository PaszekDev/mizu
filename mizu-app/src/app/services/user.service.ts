import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDTO } from '../models/user-dto.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../models/abstraction/base-service.service';
import { LocalStorageService } from './local-data-storage.service';

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
    const sessionKey = this.localStorageService.getSessionKey();
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',sessionKey);
    return this.http.get<UserDTO>(this.resourceUrl + '/logged', {
      headers: headers
    });
  }

}

interface GetResponse {
  content: UserDTO[];
}
