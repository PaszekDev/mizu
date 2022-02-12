package com.mizu.mizuapi.domain.permission;

public enum UserGroup {
    TEACHER, STUDENT, RECTOR, ADMINISTRATOR, MODERATOR;

    public static boolean isEnum(String value) {
        for (UserGroup userGroup : UserGroup.values()) {
            if (value.equals(userGroup.name())) {
                return true;
            }
        }
        return false;
    }
}
