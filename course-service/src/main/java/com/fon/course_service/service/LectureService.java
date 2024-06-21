package com.fon.course_service.service;

import com.fon.course_service.dto.request.lecture.LectureRequest;
import com.fon.course_service.dto.response.lecture.LectureResponse;

import java.util.List;

public interface LectureService {
    List<LectureResponse> getAllByModuleId(long moduleId);

    LectureResponse getById(long id);

    LectureResponse create(LectureRequest lectureRequest);

    LectureResponse update(long id, LectureRequest lectureRequest);

    void delete(long id);
}
