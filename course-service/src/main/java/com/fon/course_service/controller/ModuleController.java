package com.fon.course_service.controller;

import com.fon.course_service.dto.request.module.ModuleRequest;
import com.fon.course_service.dto.response.module.ModuleResponse;
import com.fon.course_service.service.ModuleService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Modules")
@RestController
@CrossOrigin
@RequestMapping("/api")
public class ModuleController {
    private final ModuleService moduleService;

    public ModuleController(ModuleService moduleService) {
        this.moduleService = moduleService;
    }

    @GetMapping("/courses/{courseId}/modules")
    public ResponseEntity<List<ModuleResponse>> getAllByCourseId(
            @PathVariable(value = "courseId") long courseId) {
        return new ResponseEntity<>(moduleService.getAllByCourseId(courseId), HttpStatus.OK);
    }

    @GetMapping("/modules/{id}")
    public ResponseEntity<ModuleResponse> getById(@PathVariable(value = "id") long id) {
        return new ResponseEntity<>(moduleService.getById(id), HttpStatus.OK);
    }

    @PostMapping("/modules")
    public ResponseEntity<ModuleResponse> create(@RequestBody ModuleRequest moduleRequest) {
        return new ResponseEntity<>(moduleService.create(moduleRequest), HttpStatus.CREATED);
    }

    @PutMapping("/modules/{id}")
    public ResponseEntity<ModuleResponse> update(@PathVariable(value = "id") long id,
                                                 @RequestBody ModuleRequest moduleRequest) {
        return new ResponseEntity<>(moduleService.update(id, moduleRequest), HttpStatus.OK);
    }

    @DeleteMapping("/modules/{id}")
    public ResponseEntity<String> delete(@PathVariable(value = "id") long id) {
        moduleService.delete(id);

        return new ResponseEntity<>("Module successfully deleted.", HttpStatus.OK);
    }
}
