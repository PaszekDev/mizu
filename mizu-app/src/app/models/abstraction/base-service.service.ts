import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchRequest } from '../search-request.model';
import { UserListDTO } from './user-list.model';

@Injectable({providedIn: 'root'})
export abstract class BaseService<T> {

    protected resourceUrl = "http://localhost:8081/api/"+this.url;

    constructor(protected http: HttpClient, protected url: String) { }

    public getBySearchRequest(searchRequest: SearchRequest) {
        return this.http.post<UserListDTO<T>>(this.resourceUrl + "/search",searchRequest);
    }
    
    public getAll(): Observable<T[]> {
        return this.http.get<T[]>(this.resourceUrl);
    }

    protected getById(id:number): Observable<T> {
        return this.http.get<T>(this.resourceUrl + "/" + id);
    }

    protected create(object: T): any {
        return this.http.post<any>(this.resourceUrl,object);
    }

    protected deleteById(id: number): any {
        return this.http.delete<any>(this.resourceUrl+"/"+id);
    }

    protected update(object: T): any {
        return this.http.put<any>(this.resourceUrl, object);
    }
}