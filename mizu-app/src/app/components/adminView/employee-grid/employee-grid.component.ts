import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/models/abstraction/base-component.service';
import { Param } from 'src/app/models/search-request.model';
import { MizuColumn } from 'src/app/models/table/mizu-column.model';
import { UserDTO } from 'src/app/models/user-dto.model';
import { UserGroups } from 'src/app/models/user-groups.enum';
import { EditTableRowDialogComponent } from 'src/app/dialog/edit-table-row-dialog-component/edit-table-row-dialog-component';
import { PreviewTableRowDialogComponent } from 'src/app/dialog/preview-table-row-dialog/preview-table-row-dialog.component';
import { ToastService } from 'src/app/services/toast.service';
import { DeleteTableRowDialogComponent } from 'src/app/dialog/delete-table-row-dialog/delete-table-row-dialog.component';
;

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.scss'],
})
export class EmployeeGridComponent
  extends BaseComponent<UserDTO>
  implements OnInit {

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

  constructor(protected http: HttpClient, private dialog: MatDialog, private toastService: ToastService) {
    super(http, 'user');
  }

  ngAfterViewInit() {

  }

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

  public edit(value: UserDTO) {

    this.dialog.open(EditTableRowDialogComponent, {
      height: 'auto',
      width: 'auto',
      data: JSON.parse(JSON.stringify(value)),
    }).afterClosed()
      .subscribe(res => {

        if (res.data != null) {
          value = res.data
          let index = this.items.findIndex(item => item.id == value.id)
          this.items[index] = value
          this.update(value).subscribe(
            (res: any) => {
              this.toastService.showNotification("Updated successfully", "Close", "success")
              this.refreshTable()
            },
            (err: any) => {
              this.toastService.showNotification(err.error, "Close", "error");
            }
          );
        }
      })
  }

  public preview(value: UserDTO) {
    this.dialog.open(PreviewTableRowDialogComponent, {
      height: 'auto',
      width: 'auto',
      data: value,
    })
  }

  public delete(value: any) {
    this.dialog.open(DeleteTableRowDialogComponent, {
      height: 'auto',
      width: 'auto',
      data: { ID: value.id, First_Name: value.firstName, Last_Name: value.lastName },
    }).afterClosed()
      .subscribe(res => {
        if (res.data != null) {
          this.deleteById(value.id).subscribe(
            (res: any) => {
              this.toastService.showNotification("Deleted successfully", "Close", "success")
              this.refreshTable()
            },
            (err: any) => {
              this.toastService.showNotification(err.error, "Close", "error");
            }
          );
        }
      })
  }

  private refreshTable() {
    this.ngOnInit();
  }
}
