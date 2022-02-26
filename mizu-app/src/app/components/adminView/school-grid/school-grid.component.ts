import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteTableRowDialogComponent } from 'src/app/dialog/delete-table-row-dialog/delete-table-row-dialog.component';
import { EditTableRowDialogComponent } from 'src/app/dialog/edit-table-row-dialog-component/edit-table-row-dialog-component';
import { BaseComponent } from 'src/app/models/abstraction/base-component.service';
import { SchoolDTO } from 'src/app/models/school/school-dto.model';
import { Param } from 'src/app/models/search-request.model';
import { MizuColumn } from 'src/app/models/table/mizu-column.model';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-school-grid',
  templateUrl: './school-grid.component.html',
  styleUrls: ['./school-grid.component.scss']
})
export class SchoolGridComponent
  extends BaseComponent<SchoolDTO>
  implements OnInit {

  public columns: MizuColumn[] = [];

  public params: Param[] = []
  constructor(protected http: HttpClient, private dialog: MatDialog, private toastService: ToastService) {
    super(http, 'school');
  }

  ngOnInit(): void {
    this.initData();
    this.initColumns();
  }

  //todo, implement search in mizu school
  public initData() {
    this.getAll().subscribe((res) => {
      if (res.length > 0) {
        this.items = res;
      } else {
        this.toastService.showNotification("Response is empty", "Close", "error");
      }
    },
      err => this.toastService.showNotification(err.error, "Close", "error"),
    );
  }

  public initColumns(): void {
    this.columns = [
      {
        fieldName: 'id',
        columnName: 'ID',
        isHidden: false,
        cell: (element: SchoolDTO) => `${element.id}`,
      } as MizuColumn,
      {
        fieldName: 'name',
        columnName: 'Name',
        isHidden: false,
        cell: (element: SchoolDTO) => `${element.schoolName}`,
      } as MizuColumn,
      {
        fieldName: 'shortcutName',
        columnName: 'Shortcut Name',
        isHidden: true,
        cell: (element: SchoolDTO) => `${element.shortcutName}`,
      } as MizuColumn,
      {
        fieldName: 'address',
        columnName: 'Address',
        isHidden: false,
        cell: (element: SchoolDTO) => `${element.address}`,
      } as MizuColumn,
      {
        fieldName: 'postCode',
        columnName: 'Postal Code',
        isHidden: false,
        cell: (element: SchoolDTO) => `${element.postCode}`,
      } as MizuColumn,
      {
        fieldName: 'city',
        columnName: 'City',
        isHidden: false,
        cell: (element: SchoolDTO) => `${element.city}`,
      } as MizuColumn,
      {
        fieldName: 'country',
        columnName: 'Country',
        isHidden: false,
        cell: (element: SchoolDTO) => `${element.country}`,
      } as MizuColumn,
      {
        fieldName: 'schoolType',
        columnName: 'School Type',
        isHidden: false,
        cell: (element: SchoolDTO) => `${element.schoolType}`,
      } as MizuColumn,
      {
        fieldName: 'kindOfSchool',
        columnName: 'Kind Of School',
        isHidden: false,
        cell: (element: SchoolDTO) => `${element.kindOfSchool}`,
      } as MizuColumn,
      {
        fieldName: 'createDate',
        columnName: 'Create Date',
        isHidden: true,
        cell: (element: SchoolDTO) => `${element.shortcutName}`,
      } as MizuColumn,
    ];
  }

  public delete(value: SchoolDTO) {
    this.dialog.open(DeleteTableRowDialogComponent, {
      height: 'auto',
      width: 'auto',
      data: { ID: value.id, SchoolName: value.schoolName },
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


  public edit(value: SchoolDTO) {

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


  private refreshTable() {
    this.ngOnInit();
  }
}
