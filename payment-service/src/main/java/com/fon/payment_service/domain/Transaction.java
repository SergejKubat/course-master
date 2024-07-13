package com.fon.payment_service.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;

@Document(collection = "transactions")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Transaction {
    @Id
    private String id;

    @Field(name = "account_id")
    private long accountId;

    @Field(name = "course_id")
    private long courseId;

    @Field(name = "amount")
    private double amount;

    @Field(name = "currency")
    private String currency;

    @Field(name = "payment_method")
    private String paymentMethod;

    @Field(name = "card_data")
    private CardData cardData;

    @Field(name = "created_at")
    @CreatedDate
    private LocalDateTime createdAt;
}
