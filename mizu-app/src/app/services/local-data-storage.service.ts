import { Injectable } from '@angular/core';
import { LocalStorageKey } from '../models/LocalStorageKey.model';
import { UserPermission } from '../models/permission/permission.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  set(key: LocalStorageKey | string, data: string, type: Storage) {
    type.setItem(key, data);
  }

  get(key: LocalStorageKey | string, type: Storage) {
    return type.getItem(key);
  }

  setUserPermission(data: UserPermission[]) {
    localStorage.setItem(
      LocalStorageKey.USER_PERMISSIONS,
      JSON.stringify(data)
    );
  }

  getUserPermission(): UserPermission[] {
    if (localStorage.getItem(LocalStorageKey.USER_PERMISSIONS)) {
      const permissions = localStorage.getItem(
        LocalStorageKey.USER_PERMISSIONS
      )!;
      return JSON.parse(permissions);
    }
    throw console.error('No item');
  }
}
