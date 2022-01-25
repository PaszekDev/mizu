import { Injectable } from '@angular/core';
import { PermissionType } from '../models/permission/permission-type.model';
import { LocalStorageService } from './local-data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  constructor(private localStorageService: LocalStorageService) {}

  hasOnePermission(permission: PermissionType) {
    const groupPerm = permission.split('/');
    return this.localStorageService
      .getUserPermission()
      .some(
        (e) => e.groupName === groupPerm[0] && e.permission === groupPerm[1]
      );
  }
}
