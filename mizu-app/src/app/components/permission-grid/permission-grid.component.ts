import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserPermission} from 'src/app/models/permission/user-permission.model';
import {PermissionService} from 'src/app/services/permissions.service';

@Component({
  selector: 'app-permission-grid',
  templateUrl: './permission-grid.component.html',
  styleUrls: ['./permission-grid.component.scss']
})
export class PermissionGridComponent implements OnInit {

  public items: UserPermission[] = [];

  constructor(private permissionService: PermissionService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.fetchData()
    const userId = this.route.snapshot.paramMap.get("userId");
    console.log(userId)
  }

  fetchData() {
    this.permissionService.getAll().subscribe(res => {
      this.items = res;
    })
  }

}
