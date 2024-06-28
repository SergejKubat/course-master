package com.fon.api_gateway.route;

import org.springframework.cloud.gateway.server.mvc.handler.HandlerFunctions;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.function.RequestPredicates;
import org.springframework.web.servlet.function.RouterFunction;
import org.springframework.web.servlet.function.ServerResponse;

import java.net.URI;

import static org.springframework.cloud.gateway.server.mvc.filter.CircuitBreakerFilterFunctions.circuitBreaker;
import static org.springframework.cloud.gateway.server.mvc.filter.FilterFunctions.setPath;
import static org.springframework.cloud.gateway.server.mvc.handler.GatewayRouterFunctions.route;

@Configuration
public class Routes {
    @Bean
    public RouterFunction<ServerResponse> authServiceRoute() {
        return route("auth_service")
                .route(
                        RequestPredicates.path("/api/auth/**"),
                        HandlerFunctions.http("http://localhost:8081/api/auth")
                )
                .route(
                        RequestPredicates.path("/api/accounts/**"),
                        HandlerFunctions.http("http://localhost:8081/api/accounts"))
                .filter(circuitBreaker("authServiceCircuitBreaker", URI.create("forward:/fallbackRoute")))
                .build();
    }

    @Bean
    public RouterFunction<ServerResponse> authServiceRouteSwagger() {
        return route("auth_service_swagger")
                .route(
                        RequestPredicates.path("/aggregate/auth-service/v3/api-docs"),
                        HandlerFunctions.http("http://localhost:8081")
                )
                .filter(circuitBreaker("authServiceSwaggerCircuitBreaker", URI.create("forward:/fallbackRoute")))
                .filter(setPath("/v3/api-docs"))
                .build();
    }

    @Bean
    public RouterFunction<ServerResponse> courseServiceRoute() {
        return route("course_service")
                .route(
                        RequestPredicates.path("/api/categories/**"),
                        HandlerFunctions.http("http://localhost:8082/api/categories")
                )
                .route(
                        RequestPredicates.path("/api/courses/**"),
                        HandlerFunctions.http("http://localhost:8082/api/courses"))
                .route(
                        RequestPredicates.path("/api/modules/**"),
                        HandlerFunctions.http("http://localhost:8082/api/modules"))
                .route(
                        RequestPredicates.path("/api/lectures/**"),
                        HandlerFunctions.http("http://localhost:8082/api/lectures"))
                .route(
                        RequestPredicates.path("/api/reviews/**"),
                        HandlerFunctions.http("http://localhost:8082/api/reviews"))
                .route(
                        RequestPredicates.path("/api/students/**"),
                        HandlerFunctions.http("http://localhost:8082/api/students"))
                .filter(circuitBreaker("courseServiceCircuitBreaker", URI.create("forward:/fallbackRoute")))
                .build();
    }

    @Bean
    public RouterFunction<ServerResponse> courseServiceRouteSwagger() {
        return route("course_service_swagger")
                .route(
                        RequestPredicates.path("/aggregate/course-service/v3/api-docs"),
                        HandlerFunctions.http("http://localhost:8082")
                )
                .filter(circuitBreaker("courseServiceSwaggerCircuitBreaker", URI.create("forward:/fallbackRoute")))
                .filter(setPath("/v3/api-docs"))
                .build();
    }

    @Bean
    public RouterFunction<ServerResponse> paymentServiceRoute() {
        return route("payment_service")
                .route(
                        RequestPredicates.path("/api/transactions/**"),
                        HandlerFunctions.http("http://localhost:8083/api/transactions")
                )
                .filter(circuitBreaker("paymentServiceCircuitBreaker", URI.create("forward:/fallbackRoute")))
                .build();
    }

    @Bean
    public RouterFunction<ServerResponse> paymentServiceRouteSwagger() {
        return route("payment_service_swagger")
                .route(
                        RequestPredicates.path("/aggregate/payment-service/v3/api-docs"),
                        HandlerFunctions.http("http://localhost:8083")
                )
                .filter(circuitBreaker("paymentServiceSwaggerCircuitBreaker", URI.create("forward:/fallbackRoute")))
                .filter(setPath("/v3/api-docs"))
                .build();
    }

    @Bean
    public RouterFunction<ServerResponse> fallbackRoute() {
        return route("fallbackRoute")
                .GET("/fallbackRoute", request -> ServerResponse
                        .status(HttpStatus.SERVICE_UNAVAILABLE)
                        .contentType(MediaType.APPLICATION_JSON)
                        .body("{\"message\": \"Service unavailable, please try again later.\"}"))
                .build();
    }
}
