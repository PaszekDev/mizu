import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  sidenav_opened: boolean = true;
  navbarTitle:String = "Settings";

  constructor() { }

  ngOnInit(): void {
  }

}
