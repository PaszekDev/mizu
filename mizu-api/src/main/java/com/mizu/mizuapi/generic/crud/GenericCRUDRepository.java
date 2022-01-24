package com.mizu.mizuapi.generic.crud;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface GenericCRUDRepository<T,V extends GenericCRUDEntity<T,V> > extends JpaRepository<T,Long> {
}
