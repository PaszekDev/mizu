import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/models/abstraction/base-component.service';
import { Param, SearchRequest } from 'src/app/models/search-request.model';
import { MizuColumn } from 'src/app/models/table/mizu-column.model';
import { UserDTO } from 'src/app/models/user-dto.model';
import { UserGroups } from 'src/app/models/user-groups.enum';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.scss'],
})
export class StudentGridComponent
  extends BaseComponent<UserDTO>
  implements OnInit
{

  public columns: MizuColumn[] = [];

  public params: Param[] = [
    {
      value: UserGroups.STUDENT,
      fieldName: "userGroup"
    }
  ]

  constructor(protected http: HttpClient) {
    super(http, 'user');
  }


  ngOnInit(): void {
    this.initData();
    this.initColumns();
  }

  public initColumns(): void {
    this.columns = [
      {
        fieldName: 'id',
        columnName: 'id',
        isHidden: false,
        cell: (element: UserDTO) => `${element.id}`,
      } as MizuColumn,
      {
        fieldName: 'firstName',
        columnName: 'firstName',
        isHidden: false,
        cell: (element: UserDTO) => `${element.firstName}`,
      } as MizuColumn,
      {
        fieldName: 'lastName',
        columnName: 'lastName',
        isHidden: false,
        cell: (element: UserDTO) => `${element.lastName}`,
      } as MizuColumn,
      {
        fieldName: 'email',
        columnName: 'email',
        isHidden: false,
        cell: (element: UserDTO) => `${element.email}`,
      } as MizuColumn,
      {
        fieldName: 'userGroup',
        columnName: 'userGroup',
        isHidden: false,
        cell: (element: UserDTO) => `${element.userGroup}`,
      } as MizuColumn,
    ];
  }
}
