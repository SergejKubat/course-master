package com.fon.course_service.dto.response.course;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseResponse {
    private long id;

    public CourseCategoryResponse category;

    public CourseMentorResponse mentor;

    private String title;

    private String description;

    private String thumbnailUrl;

    private String videoUrl;

    private double price;

    private double averageRating;

    private int studentsCount;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
