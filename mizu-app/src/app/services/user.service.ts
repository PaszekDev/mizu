import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from '../models/user-dto.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = "http://localhost:8081/api/user"
   }

  getAllByUserGroup(userGroup:string): Observable<UserDTO[]> {    
      return this.http.get<GetResponse>(this.usersUrl+"/group/"+userGroup).pipe(
        map(response => response.content)
      );
  }
}

interface GetResponse {
   content: UserDTO[];
}
