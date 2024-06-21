package com.fon.course_service.service.impl;

import com.fon.course_service.domain.Lecture;
import com.fon.course_service.domain.Module;
import com.fon.course_service.dto.request.lecture.LectureRequest;
import com.fon.course_service.dto.response.lecture.LectureResponse;
import com.fon.course_service.exception.ResourceNotFoundException;
import com.fon.course_service.repository.LectureRepository;
import com.fon.course_service.repository.ModuleRepository;
import com.fon.course_service.service.LectureService;
import com.fon.course_service.service.mapper.DtoMapper;
import com.fon.course_service.service.mapper.EntityMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LectureServiceImpl implements LectureService {
    private final LectureRepository lectureRepository;
    private final ModuleRepository moduleRepository;

    private final DtoMapper dtoMapper;
    private final EntityMapper entityMapper;

    public LectureServiceImpl(LectureRepository lectureRepository,
                              ModuleRepository moduleRepository,
                              DtoMapper dtoMapper,
                              EntityMapper entityMapper) {
        this.lectureRepository = lectureRepository;
        this.moduleRepository = moduleRepository;
        this.dtoMapper = dtoMapper;
        this.entityMapper = entityMapper;
    }

    @Override
    public List<LectureResponse> getAllByModuleId(long moduleId) {
        return lectureRepository.findAllByModuleId(moduleId).stream().map(dtoMapper::mapToLectureResponse).toList();
    }

    @Override
    public LectureResponse getById(long id) {
        // check if lecture exists
        Lecture lecture = lectureRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Lecture", "id", String.valueOf(id))
        );

        return dtoMapper.mapToLectureResponse(lecture);
    }

    @Override
    public LectureResponse create(LectureRequest lectureRequest) {
        // check if module exists
        Module module = moduleRepository.findById(lectureRequest.getModuleId()).orElseThrow(
                () -> new ResourceNotFoundException("Module", "id", String.valueOf(lectureRequest.getModuleId()))
        );

        // map dto to lecture entity
        Lecture lecture = entityMapper.mapToLectureEntity(lectureRequest);

        lecture.setModule(module);

        // create and return lecture
        return dtoMapper.mapToLectureResponse(lectureRepository.save(lecture));
    }

    @Override
    public LectureResponse update(long id, LectureRequest lectureRequest) {
        // check if lecture exists
        Lecture lecture = lectureRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Lecture", "id", String.valueOf(id))
        );

        // check if module exists
        Module module = moduleRepository.findById(lectureRequest.getModuleId()).orElseThrow(
                () -> new ResourceNotFoundException("Module", "id", String.valueOf(lectureRequest.getModuleId()))
        );

        // change values
        lecture.setTitle(lectureRequest.getTitle());
        lecture.setDescription(lectureRequest.getDescription());
        lecture.setAttachmentUrl(lectureRequest.getAttachmentUrl());
        lecture.setPublic(lectureRequest.isPublic());
        lecture.setModule(module);

        // update and return lecture
        return dtoMapper.mapToLectureResponse(lectureRepository.save(lecture));
    }

    @Override
    public void delete(long id) {
        // check if lecture exists
        Lecture lecture = lectureRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Lecture", "id", String.valueOf(id))
        );

        lectureRepository.delete(lecture);
    }
}
