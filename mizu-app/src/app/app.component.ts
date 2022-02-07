import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageService} from './services/local-data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mizu-app';

  constructor(private localStorageService: LocalStorageService, private route: Router) {
  }

  ngOnInit(): void {
    // if (!this.localStorageService.get(LocalStorageKey.SESSION_KEY, localStorage)) {
    //   this.route.navigate(['login'])
    // }
  }
}
