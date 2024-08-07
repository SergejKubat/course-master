package com.fon.course_service.client;

import com.fon.course_service.dto.response.account.AccountResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.service.annotation.GetExchange;

public interface AuthClient {
    Logger log = LoggerFactory.getLogger(AuthClient.class);

    @GetExchange("/api/accounts/{id}")
    /*@CircuitBreaker(name = "auth", fallbackMethod = "fallbackMethod")
    @Retry(name = "auth")*/
    AccountResponse getAccount(@PathVariable long id);

    default boolean fallbackMethod(long id, Throwable throwable) {
        log.error("Cannot get account with id {}, failure reason: {}", id, throwable.getMessage());
        return false;
    }
}
