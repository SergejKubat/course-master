package com.fon.payment_service.service.impl;

import com.fon.payment_service.client.AuthClient;
import com.fon.payment_service.client.CourseClient;
import com.fon.payment_service.domain.Transaction;
import com.fon.payment_service.dto.request.transaction.TransactionRequest;
import com.fon.payment_service.dto.response.account.AccountResponse;
import com.fon.payment_service.dto.response.course.CourseResponse;
import com.fon.payment_service.dto.response.transaction.TransactionResponse;
import com.fon.payment_service.exception.BadRequestException;
import com.fon.payment_service.repository.TransactionRepository;
import com.fon.payment_service.service.TransactionService;
import com.fon.payment_service.service.mapper.DtoMapper;
import com.fon.payment_service.service.mapper.EntityMapper;
import io.getunleash.Unleash;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionServiceImpl implements TransactionService {
    private final TransactionRepository transactionRepository;

    private final AuthClient authClient;
    private final CourseClient courseClient;

    private final DtoMapper dtoMapper;
    private final EntityMapper entityMapper;

    private final Unleash unleash;

    public TransactionServiceImpl(TransactionRepository transactionRepository,
                                  AuthClient authClient,
                                  CourseClient courseClient,
                                  DtoMapper dtoMapper,
                                  EntityMapper entityMapper,
                                  Unleash unleash) {
        this.transactionRepository = transactionRepository;
        this.authClient = authClient;
        this.courseClient = courseClient;
        this.dtoMapper = dtoMapper;
        this.entityMapper = entityMapper;
        this.unleash = unleash;
    }

    @Override
    public List<TransactionResponse> getAllByAccountId(long accountId) {
        return transactionRepository.findAllByAccountId(accountId).stream()
                .map(dtoMapper::mapToTransactionResponse).toList();
    }

    @Override
    public List<TransactionResponse> getAllByCourseId(long courseId) {
        return transactionRepository.findAllByCourseId(courseId).stream()
                .map(dtoMapper::mapToTransactionResponse).toList();
    }

    @Override
    public boolean getByAccountIdAndCourseId(long accountId, long courseId) {
        Transaction transaction = transactionRepository.findByAccountIdAndCourseId(accountId, courseId).orElse(null);

        return transaction != null;
    }

    @Override
    public TransactionResponse create(TransactionRequest transactionRequest) {
        // get account from auth service
        AccountResponse accountResponse = authClient.getAccount(transactionRequest.getAccountId());

        // check if account exists
        if (accountResponse == null) {
            throw new BadRequestException("Account doesn't exist.");
        }

        // get course from course service
        CourseResponse courseResponse = courseClient.getCourse(transactionRequest.getCourseId());

        // check if course exists
        if (courseResponse == null) {
            throw new BadRequestException("Course doesn't exist.");
        }

        // check if transaction with same accountId and userId already exists
        if (transactionRepository.findByAccountIdAndCourseId(transactionRequest.getAccountId(),
                transactionRequest.getCourseId()).isPresent()) {
            throw new BadRequestException("Account is already purchased course.");
        }

        // create new transaction
        Transaction transaction = entityMapper.mapToTransactionEntity(transactionRequest);

        boolean coursesDiscountEnabled = unleash.isEnabled("coursesDiscount");

        transaction.setAmount(coursesDiscountEnabled ?
                courseResponse.getPrice() - (courseResponse.getPrice() / 10)
                : courseResponse.getPrice());

        return dtoMapper.mapToTransactionResponse(transactionRepository.save(transaction));
    }
}
