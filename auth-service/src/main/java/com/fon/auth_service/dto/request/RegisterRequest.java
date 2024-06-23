package com.fon.auth_service.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class RegisterRequest {
    @NotNull
    @NotBlank(message = "Username cannot be blank.")
    private String username;

    @NotNull
    @NotBlank(message = "Email cannot be blank.")
    private String email;

    @NotNull
    @NotBlank(message = "First name cannot be blank.")
    private String firstName;

    @NotNull
    @NotBlank(message = "Last name cannot be blank.")
    private String lastName;

    @NotNull
    @NotBlank(message = "Password cannot be blank.")
    private String password;
}
