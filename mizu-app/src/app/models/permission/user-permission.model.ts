import {Permission} from "./permission.model";

export interface UserPermission {
  id: number;
  groupName: string;
  permissionList: Permission[]
}
