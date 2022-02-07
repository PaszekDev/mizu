import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserDTO} from '../models/user-dto.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BaseService} from '../models/abstraction/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<UserDTO> {

  constructor(protected http: HttpClient) {
    super(http, "user");
  }

  getAllByUserGroup(userGroup: string): Observable<UserDTO[]> {
    return this.http.get<GetResponse>(this.resourceUrl + "/group/" + userGroup).pipe(
      map(response => response.content)
    );
  }
}

interface GetResponse {
   content: UserDTO[];
}
