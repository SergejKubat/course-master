package com.fon.payment_service.dto.response.course;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseResponse {
    private long id;

    private long mentorId;

    private String title;

    private String description;

    private String thumbnailUrl;

    private String videoUrl;

    private double price;

    private double averageRating;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}