package com.fon.course_service.service;

import com.fon.course_service.dto.request.module.ModuleRequest;
import com.fon.course_service.dto.response.module.ModuleResponse;

import java.util.List;

public interface ModuleService {
    List<ModuleResponse> getAllByCourseId(long courseId);

    ModuleResponse getById(long id);

    ModuleResponse create(ModuleRequest moduleRequest);

    ModuleResponse update(long id, ModuleRequest moduleRequest);

    void delete(long id);
}
