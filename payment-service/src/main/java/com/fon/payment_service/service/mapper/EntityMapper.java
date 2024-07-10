package com.fon.payment_service.service.mapper;

import com.fon.payment_service.domain.CardData;
import com.fon.payment_service.domain.Transaction;
import com.fon.payment_service.dto.request.transaction.TransactionRequest;
import org.springframework.stereotype.Service;

@Service
public class EntityMapper {
    public Transaction mapToTransactionEntity(TransactionRequest transactionRequest) {
        Transaction transaction = new Transaction();

        transaction.setAccountId(transactionRequest.getAccountId());
        transaction.setCourseId(transactionRequest.getCourseId());
        transaction.setCurrency(transactionRequest.getCurrency());
        transaction.setPaymentMethod(transactionRequest.getPaymentMethod());

        CardData cardData = new CardData();

        cardData.setNumber(transactionRequest.getCard().getNumber());
        cardData.setExpiration(transactionRequest.getCard().getExpiration());
        cardData.setSecurityCode(transactionRequest.getCard().getSecurityCode());
        cardData.setZip(transactionRequest.getCard().getZip());

        transaction.setCardData(cardData);

        return transaction;
    }
}
