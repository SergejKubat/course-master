package com.fon.course_service.controller;

import com.fon.course_service.dto.request.lecture.LectureRequest;
import com.fon.course_service.dto.response.lecture.LectureResponse;
import com.fon.course_service.service.LectureService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Lectures")
@RestController
@RequestMapping("/api")
public class LectureController {
    private final LectureService lectureService;

    public LectureController(LectureService lectureService) {
        this.lectureService = lectureService;
    }

    @GetMapping("/modules/{moduleId}/lectures")
    public ResponseEntity<List<LectureResponse>> getAllByModuleId(
            @PathVariable(value = "moduleId") long moduleId) {
        return new ResponseEntity<>(lectureService.getAllByModuleId(moduleId), HttpStatus.OK);
    }

    @GetMapping("/lectures/{id}")
    public ResponseEntity<LectureResponse> getById(@PathVariable(value = "id") long id) {
        return new ResponseEntity<>(lectureService.getById(id), HttpStatus.OK);
    }

    @PostMapping("/lectures")
    public ResponseEntity<LectureResponse> create(@RequestBody LectureRequest lectureRequest) {
        return new ResponseEntity<>(lectureService.create(lectureRequest), HttpStatus.CREATED);
    }

    @PutMapping("/lectures/{id}")
    public ResponseEntity<LectureResponse> update(@PathVariable(value = "id") long id,
                                                  @RequestBody LectureRequest lectureRequest) {
        return new ResponseEntity<>(lectureService.update(id, lectureRequest), HttpStatus.OK);
    }

    @DeleteMapping("/lectures/{id}")
    public ResponseEntity<String> delete(@PathVariable(value = "id") long id) {
        lectureService.delete(id);

        return new ResponseEntity<>("Lecture successfully deleted.", HttpStatus.OK);
    }
}
