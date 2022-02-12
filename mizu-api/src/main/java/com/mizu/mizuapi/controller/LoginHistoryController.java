package com.mizu.mizuapi.controller;

import com.mizu.mizuapi.domain.history.LoginHistoryEntity;
import com.mizu.mizuapi.dto.LoginHistoryDTO;
import com.mizu.mizuapi.generic.crud.GenericCRUDController;
import com.mizu.mizuapi.generic.crud.GenericCRUDRepository;
import com.mizu.mizuapi.generic.crud.GenericMapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EntityManager;


@RestController
@RequestMapping("/api/history/login")
@CrossOrigin(originPatterns = "*", maxAge = 3600)
public class LoginHistoryController extends GenericCRUDController<LoginHistoryEntity, LoginHistoryDTO> {

    public LoginHistoryController(GenericCRUDRepository<LoginHistoryEntity, LoginHistoryDTO> repository, GenericMapper<LoginHistoryEntity, LoginHistoryDTO> mapper, EntityManager em) {
        super(repository, mapper, em, LoginHistoryEntity.class);
    }
}
