import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from '../models/user-dto.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../models/abstraction/base-service.service';
import { SearchRequest } from '../models/search-request.model';
import { UserListDTO } from '../models/abstraction/user-list.model';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService<UserDTO> {

  constructor(protected http: HttpClient) {
    super(http, 'user');
  }

  getAllByUserGroup(userGroup: string): Observable<UserDTO[]> {
    return this.http
      .get<GetResponse>(this.resourceUrl + '/group/' + userGroup)
      .pipe(map((response) => response.content));
  }

  getAllByUserGroups(userGroups: string[]) {
    return this.http.post<UserDTO[]>(this.resourceUrl+'/group',userGroups);
  }

  getBySearchRequest(searchRequest: SearchRequest) {
    return this.http.post<UserListDTO<UserDTO>>(this.resourceUrl+'/search',searchRequest);
  }

}

interface GetResponse {
  content: UserDTO[];
}
