package com.fon.course_service.controller;

import com.fon.course_service.dto.request.course.CourseRequest;
import com.fon.course_service.dto.response.course.CourseResponse;
import com.fon.course_service.dto.response.course.CoursesResponse;
import com.fon.course_service.service.CourseService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Courses")
@RestController
@RequestMapping("/api")
public class CourseController {
    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/categories/{categoryId}/courses")
    public ResponseEntity<List<CoursesResponse>> getAllByCategoryId(
            @PathVariable(value = "categoryId") long categoryId,
            @RequestParam(name = "query", required = false, defaultValue = "") String query) {
        return new ResponseEntity<>(courseService.getAllByCategoryId(categoryId, query), HttpStatus.OK);
    }

    @GetMapping("/mentors/{mentorId}/courses")
    public ResponseEntity<List<CoursesResponse>> getAllByMentorId(
            @PathVariable(value = "mentorId") long mentorId,
            @RequestParam(name = "query", required = false, defaultValue = "") String query) {
        return new ResponseEntity<>(courseService.getAllByMentorId(mentorId, query), HttpStatus.OK);
    }

    @GetMapping("/courses/{id}")
    public ResponseEntity<CourseResponse> getById(@PathVariable(value = "id") long id) {
        return new ResponseEntity<>(courseService.getById(id), HttpStatus.OK);
    }

    @PostMapping("/courses")
    public ResponseEntity<CourseResponse> create(@RequestBody CourseRequest courseRequest) {
        return new ResponseEntity<>(courseService.create(courseRequest), HttpStatus.CREATED);
    }

    @PutMapping("/courses/{id}")
    public ResponseEntity<CourseResponse> update(@PathVariable(value = "id") long id,
                                                 @RequestBody CourseRequest courseRequest) {
        return new ResponseEntity<>(courseService.update(id, courseRequest), HttpStatus.OK);
    }

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<String> delete(@PathVariable(value = "id") long id) {
        courseService.delete(id);

        return new ResponseEntity<>("Course successfully deleted.", HttpStatus.OK);
    }
}
