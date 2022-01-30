package com.mizu.mizuapi.domain.permission;

import com.mizu.mizuapi.domain.user_group_permission.UserGroupPermissionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserGroupPermissionRepository extends JpaRepository<UserGroupPermissionEntity, Long> {
}
