import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserDTO } from '../models/user-dto.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../models/abstraction/base-service.service';
import { LocalStorageService } from './local-data-storage.service';
import { EmailRequest } from '../models/email-request';
import { SearchRequest } from '../models/search-request.model';
import { UserListDTO } from '../models/abstraction/user-list.model';

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

  getBySearchRequest(searchRequest: SearchRequest) {
    return this.http.post<UserListDTO<UserDTO>>(this.resourceUrl+'/search',searchRequest);
  }

  updateUser(path: string, userDTO: UserDTO) {
    return this.http.put<any>(this.resourceUrl + path, userDTO);
  }

  doesPasswordMatch(path: string, userDTO: UserDTO) {
    return this.http.put<any>(this.resourceUrl + path, userDTO);
  }
}

interface GetResponse {
  content: UserDTO[];
}
