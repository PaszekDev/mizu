import {SessionDTO} from "./sessionDTO.model";
import {UserPermission} from './permission/user-permission.model';

export interface SessionWithUserPermissionDTO extends SessionDTO {
  userGroupPermissionDTOS: UserPermission[];
}
