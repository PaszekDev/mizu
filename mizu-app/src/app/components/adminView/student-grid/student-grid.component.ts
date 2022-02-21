import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteTableRowDialogComponent } from 'src/app/dialog/delete-table-row-dialog/delete-table-row-dialog.component';
import { EditTableRowDialogComponent } from 'src/app/dialog/edit-table-row-dialog-component/edit-table-row-dialog-component';
import { PreviewTableRowDialogComponent } from 'src/app/dialog/preview-table-row-dialog/preview-table-row-dialog.component';
import { BaseComponent } from 'src/app/models/abstraction/base-component.service';
import { Param } from 'src/app/models/search-request.model';
import { MizuColumn } from 'src/app/models/table/mizu-column.model';
import { UserDTO } from 'src/app/models/user-dto.model';
import { UserGroups } from 'src/app/models/user-groups.enum';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.scss'],
})
export class StudentGridComponent
  extends BaseComponent<UserDTO>
  implements OnInit {

  public columns: MizuColumn[] = [];

  public params: Param[] = [
    {
      value: UserGroups.STUDENT,
      fieldName: "userGroup"
    }
  ]

  constructor(protected http: HttpClient, private dialog: MatDialog, private toastService: ToastService) {
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

  public delete(value: UserDTO) {
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
