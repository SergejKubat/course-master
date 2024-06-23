package com.fon.payment_service.dto.response.transaction;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TransactionResponse {
    private String id;

    private long studentId;

    private long courseId;

    private LocalDateTime createdAt;
}
