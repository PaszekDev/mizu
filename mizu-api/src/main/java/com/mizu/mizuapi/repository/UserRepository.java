package com.mizu.mizuapi.repository;

import com.mizu.mizuapi.domain.permission.UserGroup;
import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.generic.crud.GenericCRUDRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends GenericCRUDRepository<UserEntity, UserDTO> {

    @Query("select s from UserEntity s where s.email = :email")
    UserEntity getUserByEmail(String email);

    @Query("select s from UserEntity s where s.id = :userId")
    UserEntity getById(Long userId);

    @Query(value = "select * from users s order by s.index DESC LIMIT 1", nativeQuery = true)
    UserEntity getUsersDSC();

    @Query(value = "select s from UserEntity s where s.session is not null")
    List<UserEntity> getAllWhereSessionIsNotNull();

    @Query(value = "select u from UserEntity u inner join SessionEntity se on se.id = u.session.id where se.sessionKey = :sessionKey")
    UserEntity getUserBySessionKey(String sessionKey);

    @Query(value = "select u from UserEntity u where u.userGroup = :userGroup")
    List<UserEntity> getByUserGroup(UserGroup userGroup);
}


