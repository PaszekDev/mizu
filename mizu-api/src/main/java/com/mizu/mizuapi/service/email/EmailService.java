package com.mizu.mizuapi.service.email;

import com.mizu.mizuapi.request.EmailRequest;

public interface EmailService {
    EmailRequest sendEmail(EmailRequest emailRequest);
}
