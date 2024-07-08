package com.fon.course_service.dto.response.transaction;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TransactionResponse {
    private String id;

    private long accountId;

    private long courseId;

    private LocalDateTime createdAt;
}
