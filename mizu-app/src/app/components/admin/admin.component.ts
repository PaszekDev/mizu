import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  sidenav_opened: boolean = true;

  navbarTitle:String = "Administration Panel";
  searchText:String = "";

  constructor() { }

  ngOnInit(): void {  
  }
}
