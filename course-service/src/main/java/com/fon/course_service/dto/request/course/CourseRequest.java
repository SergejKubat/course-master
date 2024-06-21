package com.fon.course_service.dto.request.course;

import lombok.Data;

@Data
public class CourseRequest {
    private long id;

    private long categoryId;

    private long mentorId;

    private String title;

    private String description;

    private String thumbnailUrl;

    private String videoUrl;

    private double price;

    private boolean isPublic;
}
