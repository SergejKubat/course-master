package com.fon.course_service.service;

import com.fon.course_service.dto.request.course.CourseRequest;
import com.fon.course_service.dto.response.course.CourseResponse;
import com.fon.course_service.dto.response.course.CoursesResponse;

import java.util.List;

public interface CourseService {
    List<CoursesResponse> getAllByCategoryId(long categoryId, String query);

    List<CoursesResponse> getAllByMentorId(long mentorId, String query);

    List<CoursesResponse> getPopular();

    CourseResponse getById(long id);

    CourseResponse create(CourseRequest courseRequest);

    CourseResponse update(long id, CourseRequest courseRequest);

    void delete(long id);
}
