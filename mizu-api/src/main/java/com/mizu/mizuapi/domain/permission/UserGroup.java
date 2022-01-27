package com.mizu.mizuapi.domain.permission;

public enum UserGroup {
    STUDENT(1L), TEACHER(2L), RECTOR(3L), MODERATOR(4L), ADMINISTRATOR(5L);

    private final Long permissionGroupId;

    UserGroup(Long id) {
        this.permissionGroupId = id;
    }

    public Long getPermissionGroupId() {
        return this.permissionGroupId;
    }
}
