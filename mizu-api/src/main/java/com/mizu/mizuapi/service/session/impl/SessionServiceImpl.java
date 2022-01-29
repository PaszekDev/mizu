package com.mizu.mizuapi.service.session.impl;

import com.mizu.mizuapi.domain.session.SessionEntity;
import com.mizu.mizuapi.dto.SessionDTO;
import com.mizu.mizuapi.repository.SessionRepository;
import com.mizu.mizuapi.service.session.SessionService;
import com.mizu.mizuapi.service.session.mapper.SessionMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class SessionServiceImpl implements SessionService {

    private final SessionRepository sessionRepository;
    private final SessionMapper sessionMapper = new SessionMapper();

    @Override
    public SessionDTO getBySessionKey(String sessionKey) {
        SessionEntity session = sessionRepository.getSessionBySessionKey(sessionKey);
        if (session != null) {
            return sessionMapper.toDto(session);
        }
        return null;
    }
}
