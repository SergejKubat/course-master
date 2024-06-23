package com.fon.payment_service.repository;

import com.fon.payment_service.domain.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends MongoRepository<Transaction, String> {
    List<Transaction> findAllByStudentId(long studentId);

    List<Transaction> findAllByCourseId(long courseId);
}
