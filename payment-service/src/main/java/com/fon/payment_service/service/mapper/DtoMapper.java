package com.fon.payment_service.service.mapper;

import com.fon.payment_service.domain.Transaction;
import com.fon.payment_service.dto.response.transaction.TransactionResponse;
import org.springframework.stereotype.Service;

@Service
public class DtoMapper {
    public TransactionResponse mapToTransactionResponse(Transaction transaction) {
        TransactionResponse transactionResponse = new TransactionResponse();

        transactionResponse.setId(transaction.getId());
        transactionResponse.setStudentId(transaction.getStudentId());
        transactionResponse.setCourseId(transaction.getCourseId());
        transactionResponse.setCreatedAt(transaction.getCreatedAt());

        return transactionResponse;
    }
}
