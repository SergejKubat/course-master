package com.fon.course_service.controller;

import com.fon.course_service.service.ReviewService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ReviewController {

    public ReviewController(ReviewService reviewService) {
    }
}
