package com.fon.payment_service.client;

import com.fon.payment_service.dto.response.account.AccountResponse;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.service.annotation.GetExchange;

public interface AuthClient {
    @GetExchange("/api/accounts/{id}")
    AccountResponse getAccount(@PathVariable long id);
}
