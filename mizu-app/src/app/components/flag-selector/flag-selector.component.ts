import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-data-storage.service';

@Component({
  selector: 'app-flag-selector',
  templateUrl: './flag-selector.component.html',
  styleUrls: ['./flag-selector.component.scss'],
})
export class FlagSelectorComponent implements OnInit {
  public lang!: string;
  public flag!: string;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.lang = this.getLang();
    this.flag = this.getFlag();

    console.log(this.lang)
  }

  getLang = (): string => {
    return this.localStorageService.getLanguage();
  };

  getFlag = (): string => {
    const flag = this.localStorageService.getLanguage();
    switch (flag) {
      case 'PL':
        return '../../assets/flags/pl-flag.png';
      case 'EN':
        return '../../assets/flags/en-flag.png';
      default:
        return '../../assets/flags/pl-flag.png';
    }
  };

  setLang(value: any) {
    this.lang = value;
    this.localStorageService.Language = value;
    window.location.reload();
  }
}
