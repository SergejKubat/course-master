package com.fon.course_service.dto.request.lecture;

import lombok.Data;

@Data
public class LectureRequest {
    private long id;

    private long moduleId;

    private String title;

    private String description;

    private String attachmentUrl;

    private boolean isPublic;
}
