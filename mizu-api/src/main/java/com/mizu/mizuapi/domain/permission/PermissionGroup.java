package com.mizu.mizuapi.domain.permission;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public enum PermissionGroup {
    STUDENT(1L),TEACHER(2L),RECTOR(3L),MODERATOR(4L),ADMINISTRATOR(5L);

    private final Long permissionGroupId;

    PermissionGroup(Long id) {
        this.permissionGroupId = id;
    }

    public Long getPermissionGroupId() {
        return this.permissionGroupId;
    }
}
