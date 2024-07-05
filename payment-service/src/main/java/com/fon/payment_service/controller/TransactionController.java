package com.fon.payment_service.controller;

import com.fon.payment_service.dto.request.transaction.TransactionRequest;
import com.fon.payment_service.dto.response.transaction.TransactionResponse;
import com.fon.payment_service.service.TransactionService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Transactions")
@RestController
@RequestMapping("/api")
public class TransactionController {
    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping("/accounts/{accountId}/transactions")
    public ResponseEntity<List<TransactionResponse>> getAllByAccountId(
            @PathVariable(value = "accountId") long accountId) {
        return new ResponseEntity<>(transactionService.getAllByAccountId(accountId), HttpStatus.OK);
    }

    @GetMapping("/courses/{courseId}/transactions")
    public ResponseEntity<List<TransactionResponse>> getAllByCourseId(
            @PathVariable(value = "courseId") long courseId) {
        return new ResponseEntity<>(transactionService.getAllByCourseId(courseId), HttpStatus.OK);
    }

    @GetMapping("/transactions")
    public ResponseEntity<TransactionResponse> getByAccountId(
            @RequestParam(name = "accountId") long accountId,
            @RequestParam(name = "courseId") long courseId) {
        return new ResponseEntity<>(transactionService.getByAccountIdAndCourseId(accountId, courseId), HttpStatus.OK);
    }

    @PostMapping("/transactions")
    public ResponseEntity<TransactionResponse> create(@RequestBody TransactionRequest transactionRequest) {
        return new ResponseEntity<>(transactionService.create(transactionRequest), HttpStatus.CREATED);
    }
}
