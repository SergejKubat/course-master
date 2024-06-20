package com.fon.course_service.controller;

import com.fon.course_service.service.ModuleService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ModuleController {

    public ModuleController(ModuleService moduleService) {
    }
}
