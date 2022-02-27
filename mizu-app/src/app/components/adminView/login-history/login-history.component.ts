import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteTableRowDialogComponent } from 'src/app/dialog/delete-table-row-dialog/delete-table-row-dialog.component';
import { BaseComponent } from 'src/app/models/abstraction/base-component.service';
import { LoginHistoryDTO } from 'src/app/models/loginHistory-dto.model';
import { Param } from 'src/app/models/search-request.model';
import { MizuColumn } from 'src/app/models/table/mizu-column.model';
import { ToastService } from 'src/app/services/toast.service';
import { TranslateService } from 'src/app/core/translate-service.service';

@Component({
  selector: 'app-login-history',
  templateUrl: './login-history.component.html',
  styleUrls: ['./login-history.component.scss']
})
export class LoginHistoryComponent extends BaseComponent<LoginHistoryDTO> implements OnInit {

  public closeTranslate: any;
  public deleteTranslate: any;

  public columns: MizuColumn[] = [];
  public params: Param[] = [];

  constructor(protected http: HttpClient, 
    private dialog: MatDialog, 
    private toastService: ToastService,
    private translateService: TranslateService
    ) {
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
        columnName: this.translateService.getTranslation('id_logHist'),
        isHidden: false,
        cell: (element: LoginHistoryDTO) => `${element.id}`,
      } as MizuColumn,
      {
        fieldName: 'email',
        columnName: 'E-mail',
        isHidden: false,
        cell: (element: LoginHistoryDTO) => `${element.email}`,
      } as MizuColumn,
      {
        fieldName: 'date',
        columnName: this.translateService.getTranslation('date'),
        isHidden: false,
        cell: (element: LoginHistoryDTO) => `${element.loginDate}`,
      } as MizuColumn,
      {
        fieldName: 'IP',
        columnName: this.translateService.getTranslation('ip'),
        isHidden: false,
        cell: (element: LoginHistoryDTO) => `${element.remoteAddress}`,
      } as MizuColumn,
    ];
  }

  public delete(value: LoginHistoryDTO) {

    this.closeTranslate = this.translateService.getTranslation('close');
    this.deleteTranslate = this.translateService.getTranslation('delete_success');
    
    this.dialog.open(DeleteTableRowDialogComponent, {
      height: 'auto',
      width: 'auto',
      data: { ID: value.id, Email: value.email},
    }).afterClosed()
      .subscribe(res => {
        if (res.data != null) {
          this.deleteById(value.id).subscribe(
            (res: any) => {
              this.toastService.showNotification(this.deleteTranslate, this.closeTranslate, "success")
              this.refreshTable()
            },
            (err: any) => {
              this.toastService.showNotification(err.error, this.closeTranslate, "error");
            }
          );
        }
      })
  }

  private refreshTable() {
    this.ngOnInit();
  }


}
