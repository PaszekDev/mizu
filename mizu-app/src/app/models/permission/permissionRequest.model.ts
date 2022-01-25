import { PermissionType } from './permission-type.model';

export interface PermissionRequest {
  userId: number;
  permissionType: PermissionType;
}
