package com.fon.payment_service.service.mapper;

import com.fon.payment_service.domain.Transaction;
import com.fon.payment_service.dto.request.transaction.TransactionRequest;
import org.springframework.stereotype.Service;

@Service
public class EntityMapper {
    public Transaction mapToTransactionEntity(TransactionRequest transactionRequest) {
        Transaction transaction = new Transaction();

        transaction.setStudentId(transactionRequest.getStudentId());
        transaction.setCourseId(transactionRequest.getCourseId());
        transaction.setAmount(transactionRequest.getAmount());
        transaction.setCurrency(transactionRequest.getCurrency());
        transaction.setPaymentMethod(transactionRequest.getPaymentMethod());

        return transaction;
    }
}
