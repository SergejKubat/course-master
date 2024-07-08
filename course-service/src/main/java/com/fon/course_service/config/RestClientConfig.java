package com.fon.course_service.config;

import com.fon.course_service.client.AuthClient;
import com.fon.course_service.client.PaymentClient;
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
public class RestClientConfig {
    @Value("${auth-service.url}")
    private String authServiceUrl;

    @Value("${payment-service.url}")
    private String paymentServiceUrl;

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
    public PaymentClient paymentClient() {
        RestClient restClient = RestClient
                .builder()
                .baseUrl(paymentServiceUrl)
                .requestFactory(getClientRequestFactory())
                .build();

        RestClientAdapter restClientAdapter = RestClientAdapter.create(restClient);

        HttpServiceProxyFactory httpServiceProxyFactory = HttpServiceProxyFactory
                .builderFor(restClientAdapter)
                .build();

        return httpServiceProxyFactory.createClient(PaymentClient.class);
    }

    private ClientHttpRequestFactory getClientRequestFactory() {
        ClientHttpRequestFactorySettings clientHttpRequestFactorySettings = ClientHttpRequestFactorySettings.DEFAULTS
                .withConnectTimeout(Duration.ofSeconds(3))
                .withReadTimeout(Duration.ofSeconds(3));

        return ClientHttpRequestFactories.get(clientHttpRequestFactorySettings);
    }
}
