package com.fon.course_service.service.mapper;

import com.fon.course_service.domain.Course;
import com.fon.course_service.domain.Lecture;
import com.fon.course_service.domain.Module;
import com.fon.course_service.domain.Review;
import com.fon.course_service.dto.request.course.CourseRequest;
import com.fon.course_service.dto.request.lecture.LectureRequest;
import com.fon.course_service.dto.request.module.ModuleRequest;
import com.fon.course_service.dto.request.review.ReviewRequest;
import org.springframework.stereotype.Service;

@Service
public class EntityMapper {
    public Course mapToCourseEntity(CourseRequest courseRequest) {
        Course course = new Course();

        course.setMentorId(courseRequest.getMentorId());
        course.setTitle(courseRequest.getTitle());
        course.setDescription(courseRequest.getDescription());
        course.setThumbnailUrl(courseRequest.getThumbnailUrl());
        course.setVideoUrl(courseRequest.getVideoUrl());
        course.setPrice(courseRequest.getPrice());
        course.setPublic(courseRequest.isPublic());

        return course;
    }

    public Lecture mapToLectureEntity(LectureRequest lectureRequest) {
        Lecture lecture = new Lecture();

        lecture.setTitle(lectureRequest.getTitle());
        lecture.setDescription(lectureRequest.getDescription());
        lecture.setAttachmentUrl(lectureRequest.getAttachmentUrl());
        lecture.setPublic(lectureRequest.isPublic());

        return lecture;
    }

    public Module mapToModuleEntity(ModuleRequest moduleRequest) {
        Module module = new Module();

        module.setTitle(moduleRequest.getTitle());
        module.setDescription(moduleRequest.getDescription());

        return module;
    }

    public Review mapToReviewEntity(ReviewRequest reviewRequest) {
        Review review = new Review();

        review.setStudentId(reviewRequest.getStudentId());
        review.setRating(reviewRequest.getRating());
        review.setComment(reviewRequest.getComment());

        return review;
    }
}
