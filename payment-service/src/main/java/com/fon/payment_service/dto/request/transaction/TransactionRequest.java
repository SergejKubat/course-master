package com.fon.payment_service.dto.request.transaction;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class TransactionRequest {
    @NotEmpty
    private long accountId;

    @NotEmpty
    private long courseId;

    @NotEmpty
    private String currency;

    @NotEmpty
    private String paymentMethod;
}
