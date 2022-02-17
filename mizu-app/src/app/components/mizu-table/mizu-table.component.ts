import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomizeTableDialogComponent } from 'src/app/dialog/customize-table-dialog/customize-table-dialog.component';
import { createCustomElement } from '@angular/elements'
import { MizuColumn } from 'src/app/models/table/mizu-column.model';
import { TableRowEditComponent } from '../table-row-edit/table-row-edit.component';

@Component({
  selector: 'app-mizu-table',
  templateUrl: './mizu-table.component.html',
  styleUrls: ['./mizu-table.component.scss']
})
export class MizuTableComponent {

  private _columns: MizuColumn[] = []
  private _data: any[] = [];
  private _listLength!: number;

  constructor(private dialog: MatDialog, injector: Injector){
    const dynamicComponentTemplate = createCustomElement(TableRowEditComponent, { injector: injector})
    customElements.define('app-table-row-edit', dynamicComponentTemplate);
  }

  @Output() newSearchRequest = new EventEmitter<string>();
  @Output() changePageEmitter = new EventEmitter<any>();

  @Input() set listLength(ll: number) {
    this._listLength = ll;
  }

  @Input() set columns(values:MizuColumn[]) {
    this._columns = values;
  }

  @Input() set data(values:any[]) {
    this._data = values;
  }

  get columns() {
    return this._columns;
  }

  get data() {
    return this._data;
  }

  get displayedColumns() {
    return this.columns.filter(e=> !e.isHidden).map(e=> e.columnName);
  }

  get listLength() {
    return this._listLength;
  }

  displayPreferenceTable(): void {
    this.dialog.open(CustomizeTableDialogComponent, {
      height: 'auto',
      width: 'auto',
      data: this.columns
    }).afterClosed()
    .subscribe(res=>{
      this._columns = res.columns;
      console.log(this.columns)
    })

  }

  search(value: string) {
    this.newSearchRequest.emit(value);
  }

  changePage(value: any) {
    this.changePageEmitter.emit(value);
  }

}
