package com.fon.api_gateway.routes;

import org.springframework.cloud.gateway.server.mvc.handler.GatewayRouterFunctions;
import org.springframework.cloud.gateway.server.mvc.handler.HandlerFunctions;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.function.*;

@Configuration
public class Routes {
    @Bean
    public RouterFunction<ServerResponse> authServiceRoute() {
        return GatewayRouterFunctions
                .route("auth_service")
                .route(
                        RequestPredicates.path("/api/auth/**"),
                        HandlerFunctions.http("http://localhost:8081/api/auth")
                )
                .route(
                        RequestPredicates.path("/api/accounts/**"),
                        HandlerFunctions.http("http://localhost:8081/api/accounts"))
                .build();
    }

    @Bean
    public RouterFunction<ServerResponse> courseServiceRoute() {
        return GatewayRouterFunctions
                .route("course_service")
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
                .build();
    }

    @Bean
    public RouterFunction<ServerResponse> paymentServiceRoute() {
        return GatewayRouterFunctions
                .route("payment_service")
                .route(
                        RequestPredicates.path("/api/transactions/**"),
                        HandlerFunctions.http("http://localhost:8083/api/transactions")
                )
                .build();
    }
}
