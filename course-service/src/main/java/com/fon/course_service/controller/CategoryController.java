package com.fon.course_service.controller;

import com.fon.course_service.service.CategoryService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/categories")
public class CategoryController {

    public CategoryController(CategoryService categoryService) {
    }
}
