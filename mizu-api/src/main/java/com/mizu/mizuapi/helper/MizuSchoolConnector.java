package com.mizu.mizuapi.helper;

import reactor.core.publisher.Mono;

import java.util.Map;

public interface MizuSchoolConnector {

    Mono<?> get(String uri, Class<?> clazz);

    Mono<?> getWithPathVariable(String uri, Map<String, ?> params, Class<?> clazz);

    Mono<?> post(String uri, Class<?> clazz, Object obj);

    Mono<?> update(String uri, Class<?> clazz, Object obj);

    Mono<?> delete(String uri, Map<String, ?> params, Class<?> clazz);

    Mono<?> getAll(String s, Class<?> clazz);
}
