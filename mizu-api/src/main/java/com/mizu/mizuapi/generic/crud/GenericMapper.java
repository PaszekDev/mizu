package com.mizu.mizuapi.generic.crud;

public interface GenericMapper<T,V> {
    T fromDto(V dto);
    V toDto(T source);
}
