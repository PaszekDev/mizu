package com.mizu.mizuapi.repository;

import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.generic.crud.GenericCRUDRepository;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends GenericCRUDRepository<UserEntity, UserDTO> {

    @Query("select s from UserEntity s where s.username = :username AND s.password = :password")
    UserEntity getUserByUsernameAndPassword(String username, String password);

    @Query("select s from UserEntity s where s.id = :userId")
    UserEntity getById(Long userId);

}

