package com.fon.course_service.dto.request.module;

import lombok.Data;

@Data
public class ModuleRequest {
    private long id;

    private long courseId;

    private String title;

    private String description;
}
