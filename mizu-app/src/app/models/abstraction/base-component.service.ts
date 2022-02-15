import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Param, SearchRequest } from '../search-request.model';
import { BaseService } from './base-service.service';

@Injectable({ providedIn: 'root' })
export abstract class BaseComponent<T> extends BaseService<T> {
  public items: T[] = [];
  public abstract params: Param[];
  public searchRequest: SearchRequest = {
    value: '',
    pageSize: 10,
    pageNumber: 0,
    params: [],
  };
  public listLength: number = 0;

  constructor(protected http: HttpClient, protected url: String) {
    super(http, url);
  }

  public initData() {
    this.params.forEach((e) => {
      if (!this.searchRequest.params.some((w) => w.value === e.value)) {
        this.searchRequest.params.push(e);
      }
    });
    this.getBySearchRequest(this.searchRequest).subscribe((res) => {
      this.items = res.content;
      this.listLength = res.totalCount;
    });
  }

  public searchResult(value: string) {
    this.searchRequest.pageNumber = 0;
    this.searchRequest.value = value;
    this.initData();
  }

  public changePage(value: any) {
    this.searchRequest.pageNumber = value.pageIndex;
    this.searchRequest.pageSize = value.pageSize;
    this.initData();
  }
}
