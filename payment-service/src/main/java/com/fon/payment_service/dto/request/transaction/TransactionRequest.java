package com.fon.payment_service.dto.request.transaction;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class TransactionRequest {
    @NotEmpty
    private long studentId;

    @NotEmpty
    private long courseId;

    @NotEmpty
    @Min(value = 0)
    private double amount;

    @NotEmpty
    private String currency;

    @NotEmpty
    private String paymentMethod;
}
