package com.fon.payment_service.dto.request.transaction;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class CardDataRequest {
    @NotEmpty
    private String number;

    @NotEmpty
    private String expiration;

    @NotEmpty
    private String securityCode;

    @NotEmpty
    private String zip;
}
