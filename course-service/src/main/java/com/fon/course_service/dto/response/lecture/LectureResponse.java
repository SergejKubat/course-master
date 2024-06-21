package com.fon.course_service.dto.response.lecture;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LectureResponse {
    private long id;

    private String title;

    private String description;

    private String attachmentUrl;

    private boolean isPublic;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
