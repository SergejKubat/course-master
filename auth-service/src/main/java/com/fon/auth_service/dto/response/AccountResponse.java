package com.fon.auth_service.dto.response;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
public class AccountResponse {
    private long id;

    private String username;

    private String email;

    private String firstName;

    private String lastName;

    private String occupation;

    private String description;

    private String avatar;

    private List<String> roles = new ArrayList<>();

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
