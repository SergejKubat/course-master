package com.fon.payment_service.config;

import com.fon.payment_service.client.AuthClient;
import com.fon.payment_service.client.CourseClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.ClientHttpRequestFactories;
import org.springframework.boot.web.client.ClientHttpRequestFactorySettings;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.support.RestClientAdapter;
import org.springframework.web.service.invoker.HttpServiceProxyFactory;

import java.time.Duration;

@Configuration
public class RestClientConfiguration {
    @Value("${auth-service.url}")
    private String authServiceUrl;

    @Value("${course-service.url}")
    private String courseServiceUrl;

    @Bean
    public AuthClient authClient() {
        RestClient restClient = RestClient
                .builder()
                .baseUrl(authServiceUrl)
                .requestFactory(getClientRequestFactory())
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

    private ClientHttpRequestFactory getClientRequestFactory() {
        ClientHttpRequestFactorySettings clientHttpRequestFactorySettings = ClientHttpRequestFactorySettings.DEFAULTS
                .withConnectTimeout(Duration.ofSeconds(3))
                .withReadTimeout(Duration.ofSeconds(3));

        return ClientHttpRequestFactories.get(clientHttpRequestFactorySettings);
    }
}
