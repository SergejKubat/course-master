package com.fon.course_service.dto.request.review;

import lombok.Data;

@Data
public class ReviewRequest {
    private long id;

    private long studentId;

    private long courseId;

    private int rating;

    private String comment;
}
