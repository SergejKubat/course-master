package com.fon.course_service.service.impl;

import com.fon.course_service.domain.Category;
import com.fon.course_service.domain.Course;
import com.fon.course_service.dto.request.course.CourseRequest;
import com.fon.course_service.dto.response.course.CourseResponse;
import com.fon.course_service.dto.response.course.CoursesResponse;
import com.fon.course_service.exception.ResourceNotFoundException;
import com.fon.course_service.repository.CategoryRepository;
import com.fon.course_service.repository.CourseRepository;
import com.fon.course_service.service.CourseService;
import com.fon.course_service.service.mapper.DtoMapper;
import com.fon.course_service.service.mapper.EntityMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {
    private final CourseRepository courseRepository;
    private final CategoryRepository categoryRepository;

    private final DtoMapper dtoMapper;
    private final EntityMapper entityMapper;

    public CourseServiceImpl(CourseRepository courseRepository,
                             CategoryRepository categoryRepository,
                             DtoMapper dtoMapper,
                             EntityMapper entityMapper) {
        this.courseRepository = courseRepository;
        this.categoryRepository = categoryRepository;
        this.dtoMapper = dtoMapper;
        this.entityMapper = entityMapper;
    }

    @Override
    public List<CoursesResponse> getAllByCategoryId(long categoryId, String query) {
        //courseRepository.findAll()
        return courseRepository.findByMentorIdAndTitleContainsIgnoreCase(categoryId, query)
                .stream().map(dtoMapper::mapToCoursesResponse).toList();
    }

    @Override
    public CourseResponse getById(long id) {
        // check if course exists
        Course course = courseRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Course", "id", String.valueOf(id))
        );

        return dtoMapper.mapToCourseResponse(course);
    }

    @Override
    public CourseResponse create(CourseRequest courseRequest) {
        // check if category exists
        Category category = categoryRepository.findById(courseRequest.getCategoryId()).orElseThrow(
                () -> new ResourceNotFoundException("Category", "id", String.valueOf(courseRequest.getCategoryId()))
        );

        // map dto to course entity
        Course course = entityMapper.mapToCourseEntity(courseRequest);

        course.setCategory(category);

        // create and return course
        return dtoMapper.mapToCourseResponse(courseRepository.save(course));
    }

    @Override
    public CourseResponse update(long id, CourseRequest courseRequest) {
        // check if course exists
        Course course = courseRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Course", "id", String.valueOf(id))
        );

        // check if category exists
        Category category = categoryRepository.findById(courseRequest.getCategoryId()).orElseThrow(
                () -> new ResourceNotFoundException("Category", "id", String.valueOf(courseRequest.getCategoryId()))
        );

        // change values
        course.setMentorId(courseRequest.getMentorId());
        course.setTitle(courseRequest.getTitle());
        course.setDescription(courseRequest.getDescription());
        course.setThumbnailUrl(courseRequest.getThumbnailUrl());
        course.setVideoUrl(courseRequest.getVideoUrl());
        course.setPrice(courseRequest.getPrice());
        course.setPublic(courseRequest.isPublic());
        course.setCategory(category);

        // update and return course
        return dtoMapper.mapToCourseResponse(courseRepository.save(course));
    }

    @Override
    public void delete(long id) {
        // check if course exists
        Course course = courseRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Course", "id", String.valueOf(id))
        );

        courseRepository.delete(course);
    }
}
