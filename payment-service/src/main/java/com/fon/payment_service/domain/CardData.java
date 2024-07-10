package com.fon.payment_service.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CardData {
    private String number;

    private String expiration;

    private String securityCode;

    private String zip;
}
