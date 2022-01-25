import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title:String = "Panel Administracyjny";
  avatarUrl:String="/assets/images/user_avatar_example.svg"

  constructor() {
   }

  ngOnInit(): void {
  }
}
