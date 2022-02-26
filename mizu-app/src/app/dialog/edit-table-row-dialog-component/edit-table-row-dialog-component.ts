import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-table-row-dialog-component',
  templateUrl: './edit-table-row-dialog-component.html',
  styleUrls: ['./edit-table-row-dialog-component.scss']
})
export class EditTableRowDialogComponent implements OnInit {
  row = {}

  constructor(
    public dialogRef: MatDialogRef<EditTableRowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.row = data;
  }

  onChange() {
    this.dialogRef.close({data: this.row});
  }

  onCancel() {
    this.dialogRef.close({data: null});
  }

  ngOnInit(): void {
  }

  trackItem(item: any) {
    return item;
  }
  
}
