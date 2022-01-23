package com.mizu.mizuapi.repository;

import com.mizu.mizuapi.domain.session.SessionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SessionRepository extends JpaRepository<SessionEntity,Long> {

    @Query("select s from SessionEntity s where s.sessionKey = :sessionKey")
    SessionEntity getSessionBySessionKey(String sessionKey);
}
