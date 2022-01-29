import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  navbarTitle:String = "Panel Administracyjny";
  avatarUrl:String = "/assets/images/user_avatar_example.svg";
  searchText:String = "";

  constructor() { }

  ngOnInit(): void {  
  }
}
