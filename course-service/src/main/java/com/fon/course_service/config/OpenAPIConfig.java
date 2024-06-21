package com.fon.course_service.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class OpenAPIConfig {
    @Bean
    public OpenAPI courseServiceAPI() {
        List<Server> servers = new ArrayList<>();

        servers.add(new Server()
                .url("http://localhost:8081")
                .description("Course Service API development server."));

        return new OpenAPI()
                .info(new Info()
                        .title("Course Service API")
                        .description("Course service for CourseMaster project.")
                        .version("1.0")
                        .contact(new Contact()
                                .name("Sergej Kubat")
                                .email("sergej.kubat18@gmail.com")
                                .url("https://github.com/SergejKubat"))
                        .license(new License()
                                .name("Apache 2.0")
                                .url("https://www.apache.org/licenses/LICENSE-2.0")))
                .servers(servers);
    }
}
