package com.fon.payment_service.service.impl;

import com.fon.payment_service.domain.Transaction;
import com.fon.payment_service.dto.request.transaction.TransactionRequest;
import com.fon.payment_service.dto.response.transaction.TransactionResponse;
import com.fon.payment_service.repository.TransactionRepository;
import com.fon.payment_service.service.TransactionService;
import com.fon.payment_service.service.mapper.DtoMapper;
import com.fon.payment_service.service.mapper.EntityMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionServiceImpl implements TransactionService {
    private final TransactionRepository transactionRepository;

    private final DtoMapper dtoMapper;
    private final EntityMapper entityMapper;

    public TransactionServiceImpl(TransactionRepository transactionRepository,
                                  DtoMapper dtoMapper,
                                  EntityMapper entityMapper) {
        this.transactionRepository = transactionRepository;
        this.dtoMapper = dtoMapper;
        this.entityMapper = entityMapper;
    }

    @Override
    public List<TransactionResponse> getAllByStudentId(long studentId) {
        return transactionRepository.findAllByStudentId(studentId).stream()
                .map(dtoMapper::mapToTransactionResponse).toList();
    }

    @Override
    public List<TransactionResponse> getAllByCourseId(long courseId) {
        return transactionRepository.findAllByCourseId(courseId).stream()
                .map(dtoMapper::mapToTransactionResponse).toList();
    }

    @Override
    public TransactionResponse create(TransactionRequest transactionRequest) {
        Transaction transaction = entityMapper.mapToTransactionEntity(transactionRequest);

        return dtoMapper.mapToTransactionResponse(transactionRepository.save(transaction));
    }
}
