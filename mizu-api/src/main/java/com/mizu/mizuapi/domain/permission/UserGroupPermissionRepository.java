package com.mizu.mizuapi.domain.permission;

import com.mizu.mizuapi.domain.user_group_permission.UserGroupPermissionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

@Repository
public interface UserGroupPermissionRepository extends JpaRepository<UserGroupPermissionEntity, Long> {

    @Query(value = "select s from UserGroupPermissionEntity s")
    Set<UserGroupPermissionEntity> getAll();

    @Query(value = "select s from UserGroupPermissionEntity s where s.groupName = :groupName")
    Optional<UserGroupPermissionEntity> getByGroupName(String groupName);
}
