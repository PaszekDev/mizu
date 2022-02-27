import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditTableRowDialogComponent } from '../edit-table-row-dialog-component/edit-table-row-dialog-component';

@Component({
  selector: 'app-delete-table-row-dialog',
  templateUrl: './delete-table-row-dialog.component.html',
  styleUrls: ['./delete-table-row-dialog.component.scss']
})
export class DeleteTableRowDialogComponent implements OnInit {

  row = {}

  constructor(
    public dialogRef: MatDialogRef<EditTableRowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.row = data;
  }

  onClose() {
    this.dialogRef.close({data: null});
  }

  onDelete() {
    this.dialogRef.close({data: this.row});
  }

  ngOnInit(): void {
  }

}
