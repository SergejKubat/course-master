package com.fon.course_service.controller;

import com.fon.course_service.dto.request.review.ReviewRequest;
import com.fon.course_service.dto.response.review.ReviewResponse;
import com.fon.course_service.service.ReviewService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Reviews")
@RestController
@RequestMapping("/api")
public class ReviewController {
    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("/courses/{courseId}/reviews")
    public ResponseEntity<List<ReviewResponse>> getAllByCourseId(
            @PathVariable(value = "courseId") long courseId) {
        return new ResponseEntity<>(reviewService.getAllByCourseId(courseId), HttpStatus.OK);
    }

    @GetMapping("/students/{studentId}/reviews")
    public ResponseEntity<List<ReviewResponse>> getAllByStudentId(
            @PathVariable(value = "studentId") long studentId) {
        return new ResponseEntity<>(reviewService.getAllByStudentId(studentId), HttpStatus.OK);
    }

    @GetMapping("/reviews/{id}")
    public ResponseEntity<ReviewResponse> getById(@PathVariable(value = "id") long id) {
        return new ResponseEntity<>(reviewService.getById(id), HttpStatus.OK);
    }

    @PostMapping("/reviews")
    public ResponseEntity<ReviewResponse> create(@RequestBody ReviewRequest reviewRequest) {
        return new ResponseEntity<>(reviewService.create(reviewRequest), HttpStatus.CREATED);
    }

    @PutMapping("/reviews/{id}")
    public ResponseEntity<ReviewResponse> update(@PathVariable(value = "id") long id,
                                                 @RequestBody ReviewRequest reviewRequest) {
        return new ResponseEntity<>(reviewService.update(id, reviewRequest), HttpStatus.OK);
    }

    @DeleteMapping("/reviews/{id}")
    public ResponseEntity<String> delete(@PathVariable(value = "id") long id) {
        reviewService.delete(id);

        return new ResponseEntity<>("Review successfully deleted.", HttpStatus.OK);
    }
}
