package com.fon.payment_service.client;

import com.fon.payment_service.dto.response.course.CourseResponse;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.service.annotation.GetExchange;

public interface CourseClient {
    @GetExchange("/api/courses/{id}")
    CourseResponse getCourse(@PathVariable long id);
}
