package com.fon.auth_service.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ChangePasswordRequest {
    @NotNull
    @NotBlank(message = "Old password cannot be blank.")
    private String oldPassword;

    @NotNull
    @NotBlank(message = "New password cannot be blank.")
    private String newPassword;
}
