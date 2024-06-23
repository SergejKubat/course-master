package com.fon.payment_service.service;

import com.fon.payment_service.dto.request.transaction.TransactionRequest;
import com.fon.payment_service.dto.response.transaction.TransactionResponse;

import java.util.List;

public interface TransactionService {
    List<TransactionResponse> getAllByStudentId(long studentId);

    List<TransactionResponse> getAllByCourseId(long courseId);

    TransactionResponse create(TransactionRequest transactionRequest);
}
