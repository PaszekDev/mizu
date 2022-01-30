import { Component, OnInit } from '@angular/core';
import { UserPermission } from 'src/app/models/permission/user-permission.model';
import { PermissionService } from 'src/app/services/permissions.service';

@Component({
  selector: 'app-permission-grid',
  templateUrl: './permission-grid.component.html',
  styleUrls: ['./permission-grid.component.scss']
})
export class PermissionGridComponent implements OnInit {

  public items: UserPermission[] = [];

  constructor(private permissionService: PermissionService) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    this.permissionService.getAll().subscribe(res=>{
      this.items = res;
    })
  }

}
