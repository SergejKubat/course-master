package com.fon.auth_service.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class LoginRequest {
    @NotNull
    @NotBlank(message = "Username or email cannot be blank.")
    private String usernameOrEmail;

    @NotNull
    @NotBlank(message = "Password cannot be blank.")
    private String password;
}
