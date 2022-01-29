package com.mizu.mizuapi.generic.crud;

import org.springframework.stereotype.Repository;

@Repository
public interface GenericMapper<T,V> {
    T fromDto(V dto);
    V toDto(T source);
}
