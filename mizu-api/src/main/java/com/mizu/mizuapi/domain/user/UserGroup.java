package com.mizu.mizuapi.domain.user;

public enum UserGroup {
    STUDENT(1L),TEACHER(2L),RECTOR(3L),MODERATOR(4L),ADMINISTRATOR(5L);

    private final Long userGroupId;

    UserGroup(Long id) {
        this.userGroupId = id;
    }

    public Long getUserGroupId() {
        return this.userGroupId;
    }
}
