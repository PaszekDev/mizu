import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { PermissionType } from '../models/permission/permission-type.model';
import { PermissionService } from '../services/permissions.service';

@Directive({
  selector: '[permission]',
})
export class PermissionDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionService: PermissionService
  ) {}

  @Input() set permission(permission: PermissionType) {
    if (permission === null && this.permissionService.hasOnePermission(permission)) {
      this.templateRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
