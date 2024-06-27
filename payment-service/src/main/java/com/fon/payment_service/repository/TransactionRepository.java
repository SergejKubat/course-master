package com.fon.payment_service.repository;

import com.fon.payment_service.domain.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TransactionRepository extends MongoRepository<Transaction, String> {
    List<Transaction> findAllByAccountId(long accountId);

    List<Transaction> findAllByCourseId(long courseId);

    Optional<Transaction> findByAccountIdAndCourseId(long accountId, long courseId);
}
