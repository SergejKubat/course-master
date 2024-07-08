package com.fon.course_service.client;

import com.fon.course_service.dto.response.transaction.TransactionResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.service.annotation.GetExchange;

import java.util.List;

public interface PaymentClient {
    Logger log = LoggerFactory.getLogger(PaymentClient.class);

    @GetExchange("/api/courses/{courseId}/transactions")
    /*@CircuitBreaker(name = "payment", fallbackMethod = "fallbackMethod")
    @Retry(name = "auth")*/
    List<TransactionResponse> getCourseTransactions(@PathVariable long courseId);

    default boolean fallbackMethod(long id, Throwable throwable) {
        log.error("Cannot get account with id {}, failure reason: {}", id, throwable.getMessage());
        return false;
    }
}
