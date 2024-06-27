package com.fon.payment_service.config;

import com.fon.payment_service.client.AuthClient;
import com.fon.payment_service.client.CourseClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.support.RestClientAdapter;
import org.springframework.web.service.invoker.HttpServiceProxyFactory;

@Configuration
public class RestClientConfig {
    @Value("${auth-service.url}")
    private String authServiceUrl;

    @Value("${course-service.url}")
    private String courseServiceUrl;

    @Bean
    public AuthClient authClient() {
        RestClient restClient = RestClient
                .builder()
                .baseUrl(authServiceUrl)
                .build();

        RestClientAdapter restClientAdapter = RestClientAdapter.create(restClient);

        HttpServiceProxyFactory httpServiceProxyFactory = HttpServiceProxyFactory
                .builderFor(restClientAdapter)
                .build();

        return httpServiceProxyFactory.createClient(AuthClient.class);
    }

    @Bean
    public CourseClient courseClient() {
        RestClient restClient = RestClient
                .builder()
                .baseUrl(courseServiceUrl)
                .build();

        RestClientAdapter restClientAdapter = RestClientAdapter.create(restClient);

        HttpServiceProxyFactory httpServiceProxyFactory = HttpServiceProxyFactory
                .builderFor(restClientAdapter)
                .build();

        return httpServiceProxyFactory.createClient(CourseClient.class);
    }
}
