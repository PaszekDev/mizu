package com.mizu.mizuapi.repository;

import com.mizu.mizuapi.domain.permission.PermissionsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Set;

public interface PermissionsRepository extends JpaRepository<PermissionsEntity,Long> {

    @Query("select s from PermissionsEntity s")
    Set<PermissionsEntity> getAll();
}
