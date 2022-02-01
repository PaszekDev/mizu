package com.mizu.mizuapi.repository;

import com.mizu.mizuapi.domain.history.LoginHistoryEntity;
import com.mizu.mizuapi.dto.LoginHistoryDTO;
import com.mizu.mizuapi.generic.crud.GenericCRUDRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginHistoryRepository extends GenericCRUDRepository<LoginHistoryEntity, LoginHistoryDTO> {
}
