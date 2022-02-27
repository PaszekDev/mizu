package com.mizu.mizuapi.helper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Map;

@Service
public class MizuSchoolConnectorImpl implements MizuSchoolConnector {

    WebClient client;

    @Autowired
    WebClient.Builder webClientBuilder;

    @Value(value = "${mizu-school-api-url}")
    String mizuSchoolUrl;


    private void connect() {
        this.client = webClientBuilder.baseUrl(mizuSchoolUrl).build();
    }

    @Override
    public Mono<?> get(String uri, Class<?> clazz) {
        connect();
        return this.client.get().uri("uri")
                .retrieve().bodyToMono(clazz);
    }

    @Override
    public Mono<?> getWithPathVariable(String uri, Map<String, ?> params, Class<?> clazz) {
        connect();
        return this.client.get().uri(uri, params).retrieve().bodyToMono(clazz);
    }

    @Override
    public Mono<?> post(String uri, Class<?> clazz, Object obj) {
        connect();
        return this.client.post().uri(uri).body(obj, obj.getClass()).retrieve().bodyToMono(clazz);
    }

    @Override
    public Mono<?> update(String uri, Class<?> clazz, Object obj) {
        connect();
        return this.client.put().uri(uri).body(obj, obj.getClass()).retrieve().bodyToMono(clazz);
    }

    @Override
    public Mono<?> delete(String uri, Map<String, ?> params, Class<?> clazz) {
        connect();
        return this.client.delete().uri(uri, params).retrieve().bodyToMono(clazz);
    }

    @Override
    public Mono<?> getAll(String uri, Class<?> clazz) {
        connect();
        return this.client.get().uri(uri).retrieve().bodyToMono(clazz);
    }


}
