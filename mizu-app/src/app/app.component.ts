import { Component, OnInit } from '@angular/core';
import { LocalStorageKey } from './models/LocalStorageKey.model';
import { LocalStorageService } from './services/local-data-storage.service';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'mizu-app';
  public isLoading = true;

  constructor(private localStorageService: LocalStorageService, private route: Router) {
    this.route.events.subscribe((e : RouterEvent) => {
      this.navigationInterceptor(e);
    })
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.isLoading = true;
    }
    if (event instanceof NavigationEnd) {
      this.isLoading = false;
    }

    // In case a request fails
    if (event instanceof NavigationCancel) {
      this.isLoading = false;
    }
    if (event instanceof NavigationError) {
      this.isLoading = false;
    }
  }

  ngOnInit(): void {
    if (!this.localStorageService.get(LocalStorageKey.SESSION_KEY, localStorage)) {
      this.route.navigate(['login'])
    }
  }
}
