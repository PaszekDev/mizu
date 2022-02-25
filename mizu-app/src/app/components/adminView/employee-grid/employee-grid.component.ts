import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/models/abstraction/base-component.service';
import { Param, SearchRequest } from 'src/app/models/search-request.model';
import { MizuColumn } from 'src/app/models/table/mizu-column.model';
import { UserDTO } from 'src/app/models/user-dto.model';
import { UserGroups } from 'src/app/models/user-groups.enum';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.scss'],
})
export class EmployeeGridComponent extends BaseComponent<UserDTO> implements OnInit {

  public params: Param[] = [
    {
      value: UserGroups.RECTOR,
      fieldName: "userGroup"
    },
    {
      value: UserGroups.TEACHER,
      fieldName: "userGroup"
    }
  ]

  constructor(protected http: HttpClient) {
    super(http, 'user');
  }

  public columns: MizuColumn[] = [];

  
  ngOnInit(): void {
    this.initData();
    this.initColumns();
  }


  initColumns(): void {
    this.columns = [
      {
        fieldName: 'id',
        columnName: 'ID',
        isHidden: false,
        cell: (element: UserDTO) => `${element.id}`,
      } as MizuColumn,
      {
        fieldName: 'firstName',
        columnName: 'First Name',
        isHidden: false,
        cell: (element: UserDTO) => `${element.firstName}`,
      } as MizuColumn,
      {
        fieldName: 'lastName',
        columnName: 'Last Name',
        isHidden: false,
        cell: (element: UserDTO) => `${element.lastName}`,
      } as MizuColumn,
      {
        fieldName: 'email',
        columnName: 'Email',
        isHidden: false,
        cell: (element: UserDTO) => `${element.email}`,
      } as MizuColumn,
      {
        fieldName: 'userGroup',
        columnName: 'Group',
        isHidden: false,
        cell: (element: UserDTO) => `${element.userGroup}`,
      } as MizuColumn,
    ];
  }
}
