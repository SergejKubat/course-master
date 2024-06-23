package com.fon.payment_service.repository;

import com.fon.payment_service.domain.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TransactionRepository extends MongoRepository<Transaction, String> {
    List<Transaction> findAllByStudentId(long studentId);

    List<Transaction> findAllByCourseId(long courseId);
}
