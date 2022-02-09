import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.scss'],
})
export class UserSelectorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getAdminPanel = (): void => {
    this.router.navigate(['/admin'])
  };
}
