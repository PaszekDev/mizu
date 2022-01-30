import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../models/abstraction/base-service.service';
import {PermissionType} from '../models/permission/permission-type.model';
import {UserPermission} from '../models/permission/user-permission.model';
import {LocalStorageService} from './local-data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionService extends BaseService<UserPermission> {
  constructor(private localStorageService: LocalStorageService, protected http: HttpClient) {
    super(http, "permissions");
  }

  hasOnePermission(permission: PermissionType) {
    const groupPerm = permission.split('/');
    return this.localStorageService
      .getUserPermission()
      .some(
        (e) => e.groupName === groupPerm[0] && e.permission === groupPerm[1]
      );
  }
}
