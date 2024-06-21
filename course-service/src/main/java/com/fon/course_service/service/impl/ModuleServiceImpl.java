package com.fon.course_service.service.impl;

import com.fon.course_service.domain.Course;
import com.fon.course_service.domain.Module;
import com.fon.course_service.dto.request.module.ModuleRequest;
import com.fon.course_service.dto.response.module.ModuleResponse;
import com.fon.course_service.exception.ResourceNotFoundException;
import com.fon.course_service.repository.CourseRepository;
import com.fon.course_service.repository.ModuleRepository;
import com.fon.course_service.service.ModuleService;
import com.fon.course_service.service.mapper.DtoMapper;
import com.fon.course_service.service.mapper.EntityMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModuleServiceImpl implements ModuleService {
    private final ModuleRepository moduleRepository;
    private final CourseRepository courseRepository;

    private final DtoMapper dtoMapper;
    private final EntityMapper entityMapper;

    public ModuleServiceImpl(ModuleRepository moduleRepository,
                             CourseRepository courseRepository,
                             DtoMapper dtoMapper,
                             EntityMapper entityMapper) {
        this.moduleRepository = moduleRepository;
        this.courseRepository = courseRepository;
        this.dtoMapper = dtoMapper;
        this.entityMapper = entityMapper;
    }

    @Override
    public List<ModuleResponse> getAllByCourseId(long courseId) {
        return moduleRepository.findAllByCourseId(courseId).stream().map(dtoMapper::mapToModuleResponse).toList();
    }

    @Override
    public ModuleResponse getById(long id) {
        // check if module exists
        Module module = moduleRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Module", "id", String.valueOf(id))
        );

        return dtoMapper.mapToModuleResponse(module);
    }

    @Override
    public ModuleResponse create(ModuleRequest moduleRequest) {
        // check if course exists
        Course course = courseRepository.findById(moduleRequest.getCourseId()).orElseThrow(
                () -> new ResourceNotFoundException("Course", "id", String.valueOf(moduleRequest.getCourseId()))
        );

        // map dto to module entity
        Module module = entityMapper.mapToModuleEntity(moduleRequest);

        module.setCourse(course);

        // create and return module
        return dtoMapper.mapToModuleResponse(moduleRepository.save(module));
    }

    @Override
    public ModuleResponse update(long id, ModuleRequest moduleRequest) {
        // check if module exists
        Module module = moduleRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Module", "id", String.valueOf(id))
        );

        // check if course exists
        Course course = courseRepository.findById(moduleRequest.getCourseId()).orElseThrow(
                () -> new ResourceNotFoundException("Course", "id", String.valueOf(moduleRequest.getCourseId()))
        );

        // change values
        module.setTitle(moduleRequest.getTitle());
        module.setDescription(moduleRequest.getDescription());
        module.setCourse(course);

        // update and return module
        return dtoMapper.mapToModuleResponse(moduleRepository.save(module));
    }

    @Override
    public void delete(long id) {
        // check if module exists
        Module module = moduleRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Module", "id", String.valueOf(id))
        );

        moduleRepository.delete(module);
    }
}
