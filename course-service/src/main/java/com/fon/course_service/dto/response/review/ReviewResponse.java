package com.fon.course_service.dto.response.review;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewResponse {
    private long id;

    private ReviewStudentResponse student;

    private Long courseId;

    private int rating;

    private String comment;

    private LocalDateTime createdAt;
}
