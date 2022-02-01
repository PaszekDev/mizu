package com.mizu.mizuapi.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Builder
public class UserGroupPermissionDTO {
    private Long id;
    private String groupName;
    private Set<PermissionDTO> permissionList;
}
