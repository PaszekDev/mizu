import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MizuColumn } from 'src/app/models/table/mizu-column.model';

@Component({
  selector: 'app-customize-table-dialog',
  templateUrl: './customize-table-dialog.component.html',
  styleUrls: ['./customize-table-dialog.component.scss']
})
export class CustomizeTableDialogComponent implements OnInit {

  public columns: MizuColumn[];

  constructor(
    public dialogRef: MatDialogRef<CustomizeTableDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MizuColumn[],
  ) {
    this.columns = data;
  }

  onExit() {
    this.dialogRef.close({columns: this.columns});
  }

  ngOnInit(): void {
  }

}
