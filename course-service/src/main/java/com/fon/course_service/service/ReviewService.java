package com.fon.course_service.service;

import com.fon.course_service.dto.request.review.ReviewRequest;
import com.fon.course_service.dto.response.review.ReviewResponse;

import java.util.List;

public interface ReviewService {
    List<ReviewResponse> getAllByCourseId(long courseId);

    List<ReviewResponse> getAllByStudentId(long studentId);

    ReviewResponse getById(long id);

    ReviewResponse create(ReviewRequest reviewRequest);

    ReviewResponse update(long id, ReviewRequest reviewRequest);

    void delete(long id);
}
