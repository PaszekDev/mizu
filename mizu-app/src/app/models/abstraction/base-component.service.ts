import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';

@Injectable({providedIn: 'root'})
export abstract class BaseComponent<T> extends BaseService<T> {

    public items: T[] = [];

    constructor(protected http: HttpClient,protected url:String) {
        super(http,url);
    }
    
    public initData() {
        this.getAll().subscribe(res=>{
            this.items = res;
        })
    }

}