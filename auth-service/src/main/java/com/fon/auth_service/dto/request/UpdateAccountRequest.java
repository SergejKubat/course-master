package com.fon.auth_service.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UpdateAccountRequest {
    @NotNull
    @NotBlank(message = "First name cannot be blank.")
    private String firstName;

    @NotNull
    @NotBlank(message = "Last name cannot be blank.")
    private String lastName;

    private String occupation;

    private String description;

    private String avatar;
}
