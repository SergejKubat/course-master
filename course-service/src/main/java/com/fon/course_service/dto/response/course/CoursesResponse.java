package com.fon.course_service.dto.response.course;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CoursesResponse {
    private long id;

    private long mentorId;

    private String title;

    private String thumbnailUrl;

    private double price;

    private double averageRating;
}
