package com.mizu.mizuapi.repository;

import com.mizu.mizuapi.domain.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<UserEntity,Long> {

    @Query("select s from UserEntity s where s.username = :username AND s.password = :password")
    UserEntity getUserByUsernameAndPassword(String username, String password);
}
