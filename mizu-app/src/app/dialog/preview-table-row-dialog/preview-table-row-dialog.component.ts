import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditTableRowDialogComponent } from '../edit-table-row-dialog-component/edit-table-row-dialog-component';

@Component({
  selector: 'app-preview-table-row-dialog',
  templateUrl: './preview-table-row-dialog.component.html',
  styleUrls: ['./preview-table-row-dialog.component.scss']
})
export class PreviewTableRowDialogComponent implements OnInit {

  row = {}

  constructor(
    public dialogRef: MatDialogRef<EditTableRowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.row = data;
  }

  onClose() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
