import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/translate-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  sidenav_opened: boolean = true;
  public settings: any;
  navbarTitle:String = "";

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.settings = this.translateService.getTranslation('settings');
    this.navbarTitle = this.settings;
  }

}
