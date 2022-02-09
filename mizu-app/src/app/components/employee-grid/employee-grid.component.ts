import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/models/abstraction/base-component.service';
import { EmployeeDTO } from 'src/app/models/employee-dto.model';
import { MizuColumn } from 'src/app/models/table/mizu-column.model';
import { UserDTO } from 'src/app/models/user-dto.model';
import { UserGroups } from 'src/app/models/user-groups.enum';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.scss'],
})
export class EmployeeGridComponent
  extends BaseComponent<UserDTO>
  implements OnInit
{
  constructor(protected http: HttpClient, private userService: UserService) {
    super(http, 'user');
  }

  public columns: MizuColumn[] = [];

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    const userGroups = [UserGroups.TEACHER, UserGroups.RECTOR];
    this.userService.getAllByUserGroups(userGroups).subscribe((res) => {
      this.items = res;
      this.initColumns();
    });
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
