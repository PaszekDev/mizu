import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/translate-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  sidenav_opened: boolean = true;

  public admin: any;
  navbarTitle:String = "";
  searchText:String = "";

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {  
    this.admin = this.translateService.getTranslation('admin_panel');
    this.navbarTitle = this.admin;
  }
}
