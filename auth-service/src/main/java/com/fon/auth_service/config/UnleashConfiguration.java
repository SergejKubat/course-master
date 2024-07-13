package com.fon.auth_service.config;

import io.getunleash.DefaultUnleash;
import io.getunleash.Unleash;
import io.getunleash.util.UnleashConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UnleashConfiguration {
    @Value("${io.getunleash.app-name}")
    private String appName;

    @Value("${io.getunleash.instance-id}")
    private String instanceId;

    @Value("${io.getunleash.environment}")
    private String environment;

    @Value("${io.getunleash.api-url}")
    private String unleashAPI;

    @Value("${io.getunleash.api-token}")
    private String unleashAPIToken;

    @Bean
    public Unleash unleash() {
        UnleashConfig config = UnleashConfig.builder()
                .appName(appName)
                .instanceId(instanceId)
                .environment(environment)
                .unleashAPI(unleashAPI)
                .apiKey(unleashAPIToken)
                .build();

        return new DefaultUnleash(config);
    }
}