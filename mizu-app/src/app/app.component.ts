import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { TranslateService } from './core/translate-service.service';
import { LocalStorageKey } from './models/LocalStorageKey.model';
import {LocalStorageService} from './services/local-data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mizu-app';

  constructor(private localStorageService: LocalStorageService, private route: Router, private translateService:TranslateService) {
  }

  ngOnInit(): void {
    if (!this.localStorageService.get(LocalStorageKey.SESSION_KEY, localStorage)) {
      this.route.navigate(['login'])
    }
  }
}
