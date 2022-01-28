package com.mizu.mizuapi.service.session;

import com.mizu.mizuapi.dto.SessionDTO;


public interface SessionService {

    SessionDTO getBySessionKey(String sessionKey);

}
