import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-row-edit',
  templateUrl: './table-row-edit.component.html',
  styleUrls: ['./table-row-edit.component.scss']
})
export class TableRowEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log("Works");
  }

}
