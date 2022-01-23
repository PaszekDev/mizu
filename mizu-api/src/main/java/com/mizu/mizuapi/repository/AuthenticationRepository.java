package com.mizu.mizuapi.repository;

import com.mizu.mizuapi.domain.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

@Repository
public interface AuthenticationRepository extends JpaRepository<UserEntity,Long> {
    @Query(value = "select case when s.username = :username then 'TRUE' else 'FALSE' end from UserEntity s WHERE s.username = :username ")
    boolean isUsernameTaken(String username);

    @Query(value = "select case when s.email = :email then 'TRUE' else 'FALSE' end from UserEntity s WHERE s.email = :email ")
    boolean isEmailTaken(String email);
}
