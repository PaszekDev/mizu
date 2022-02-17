import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/models/abstraction/base-component.service';
import { LoginHistoryDTO } from 'src/app/models/loginHistory-dto.model';
import { Param } from 'src/app/models/search-request.model';
import { MizuColumn } from 'src/app/models/table/mizu-column.model';
import { LoginHistoryService } from 'src/app/services/login-history.service';

@Component({
  selector: 'app-login-history',
  templateUrl: './login-history.component.html',
  styleUrls: ['./login-history.component.scss']
})
export class LoginHistoryComponent
  extends BaseComponent<LoginHistoryDTO>
  implements OnInit {


  public columns: MizuColumn[] = [];

  public params: Param[] = [
    
  ]

  constructor(protected http: HttpClient, private loginHistoryService: LoginHistoryService) {
    super(http, 'history/login');
  }

  ngOnInit(): void {
    this.initData();
    this.initColumns();
  }

  initColumns() {
    this.columns = [
      {
        fieldName: 'id',
        columnName: 'id',
        isHidden: false,
        cell: (element: LoginHistoryDTO) => `${element.id}`,
      } as MizuColumn,
      {
        fieldName: 'email',
        columnName: 'email',
        isHidden: false,
        cell: (element: LoginHistoryDTO) => `${element.email}`,
      } as MizuColumn,
      {
        fieldName: 'date',
        columnName: 'date',
        isHidden: false,
        cell: (element: LoginHistoryDTO) => `${element.loginDate}`,
      } as MizuColumn,
      {
        fieldName: 'IP',
        columnName: 'IP',
        isHidden: false,
        cell: (element: LoginHistoryDTO) => `${element.remoteAddress}`,
      } as MizuColumn,
      {
        fieldName: 'Edit',
        columnName: 'Edit',
        isHidden: false,
        isInnerHtml:true,
        innerHtml:'<app-table-row-edit></app-table-row-edit>',
        cell: () => ``,
      } as MizuColumn,
    ];
  }
}
