import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomizeTableDialogComponent } from 'src/app/dialog/customize-table-dialog/customize-table-dialog.component';
import { MizuColumn } from 'src/app/models/table/mizu-column.model';

@Component({
  selector: 'app-mizu-table',
  templateUrl: './mizu-table.component.html',
  styleUrls: ['./mizu-table.component.scss']
})
export class MizuTableComponent {

  private _columns: MizuColumn[] = []
  private _data: any[] = [];
  

  constructor(private dialog: MatDialog){}

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

}
