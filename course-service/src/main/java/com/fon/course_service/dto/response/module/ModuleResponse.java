package com.fon.course_service.dto.response.module;

import com.fon.course_service.dto.response.lecture.LectureResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ModuleResponse {
    private long id;

    private String title;

    private String description;

    private List<LectureResponse> lectures;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
