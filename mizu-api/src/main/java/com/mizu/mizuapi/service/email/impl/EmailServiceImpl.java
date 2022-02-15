package com.mizu.mizuapi.service.email.impl;

import com.mizu.mizuapi.exception.EmailSenderException;
import com.mizu.mizuapi.request.EmailRequest;
import com.mizu.mizuapi.service.email.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {

    private final JavaMailSenderImpl javaMailSender;

    @Override
    public EmailRequest sendEmail(EmailRequest emailRequest) {

        Properties props = new Properties();
        Session session = Session.getDefaultInstance(props, null);
        MimeMessage m = new MimeMessage(session);
        try {
            m.setReplyTo(InternetAddress.parse(emailRequest.getFrom()));
            m.setText(emailRequest.getMessage());
            m.setSubject(emailRequest.getSubject());
            m.setRecipients(Message.RecipientType.TO, "mizuapptest@gmail.com");
        } catch (MessagingException e) {
            throw new EmailSenderException();
        }
        javaMailSender.send(m);
        return emailRequest;
    }
}
