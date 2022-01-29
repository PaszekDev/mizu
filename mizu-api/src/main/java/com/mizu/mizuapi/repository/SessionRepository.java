package com.mizu.mizuapi.repository;

import com.mizu.mizuapi.domain.session.SessionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

public interface SessionRepository extends JpaRepository<SessionEntity, Long> {

    @Query("select s from SessionEntity s where s.sessionKey = :sessionKey")
    SessionEntity getSessionBySessionKey(String sessionKey);

    @Modifying
    @Transactional
    @Query(value = "delete from SessionEntity s where s.sessionKey = :sessionKey")
    Integer deleteSessionBySessionKey(String sessionKey);

    @Modifying
    @Transactional
    @Query(value = "delete from SessionEntity s where s.user.id = :userId")
    Integer deleteSessionByUserId(Long userId);
}
