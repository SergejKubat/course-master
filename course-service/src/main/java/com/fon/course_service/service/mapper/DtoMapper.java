package com.fon.course_service.service.mapper;

import com.fon.course_service.domain.Module;
import com.fon.course_service.domain.*;
import com.fon.course_service.dto.response.category.CategoriesResponse;
import com.fon.course_service.dto.response.category.CategoryResponse;
import com.fon.course_service.dto.response.course.CourseCategoryResponse;
import com.fon.course_service.dto.response.course.CourseResponse;
import com.fon.course_service.dto.response.course.CoursesResponse;
import com.fon.course_service.dto.response.lecture.LectureResponse;
import com.fon.course_service.dto.response.module.ModuleResponse;
import com.fon.course_service.dto.response.review.ReviewResponse;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class DtoMapper {
    public CategoriesResponse mapToCategoriesResponse(Category category) {
        CategoriesResponse categoriesResponse = new CategoriesResponse();

        categoriesResponse.setId(category.getId());
        categoriesResponse.setName(category.getName());
        categoriesResponse.setThumbnailUrl(category.getThumbnailUrl());

        return categoriesResponse;
    }

    public CategoryResponse mapToCategoryResponse(Category category) {
        CategoryResponse categoryResponse = new CategoryResponse();

        categoryResponse.setId(category.getId());
        categoryResponse.setName(category.getName());
        categoryResponse.setDescription(category.getDescription());
        categoryResponse.setThumbnailUrl(category.getThumbnailUrl());

        return categoryResponse;
    }

    public CoursesResponse mapToCoursesResponse(Course course) {
        CoursesResponse coursesResponse = new CoursesResponse();

        coursesResponse.setId(course.getId());
        coursesResponse.setMentorId(course.getMentorId());
        coursesResponse.setTitle(course.getTitle());
        coursesResponse.setThumbnailUrl(course.getThumbnailUrl());
        coursesResponse.setPrice(course.getPrice());
        coursesResponse.setAverageRating(course.getAverageRating());

        return coursesResponse;
    }

    public CourseResponse mapToCourseResponse(Course course) {
        CourseResponse courseResponse = new CourseResponse();

        CourseCategoryResponse category = new CourseCategoryResponse(course.getCategory().getId(),
                course.getCategory().getName());

        courseResponse.setId(course.getId());
        courseResponse.setCategory(category);
        courseResponse.setTitle(course.getTitle());
        courseResponse.setDescription(course.getDescription());
        courseResponse.setThumbnailUrl(course.getThumbnailUrl());
        courseResponse.setVideoUrl(course.getVideoUrl());
        courseResponse.setPrice(course.getPrice());
        courseResponse.setAverageRating(course.getAverageRating());
        courseResponse.setCreatedAt(course.getCreatedAt());
        courseResponse.setUpdatedAt(course.getUpdatedAt());

        return courseResponse;
    }

    public LectureResponse mapToLectureResponse(Lecture lecture) {
        LectureResponse lectureResponse = new LectureResponse();

        lectureResponse.setId(lecture.getId());
        lectureResponse.setTitle(lecture.getTitle());
        lectureResponse.setDescription(lecture.getDescription());
        lectureResponse.setAttachmentUrl(lecture.isPublic() ? lecture.getAttachmentUrl() : "");
        lectureResponse.setPublic(lecture.isPublic());
        lectureResponse.setCreatedAt(lecture.getCreatedAt());
        lectureResponse.setUpdatedAt(lecture.getUpdatedAt());

        return lectureResponse;
    }

    public ModuleResponse mapToModuleResponse(Module module) {
        ModuleResponse moduleResponse = new ModuleResponse();

        moduleResponse.setId(module.getId());
        moduleResponse.setTitle(module.getTitle());
        moduleResponse.setDescription(module.getDescription());
        moduleResponse.setCreatedAt(module.getCreatedAt());
        moduleResponse.setUpdatedAt(module.getUpdatedAt());

        return moduleResponse;
    }

    public ReviewResponse mapToReviewResponse(Review review) {
        ReviewResponse reviewResponse = new ReviewResponse();

        reviewResponse.setId(review.getId());
        reviewResponse.setCourseId(review.getCourse().getId());
        reviewResponse.setRating(review.getRating());
        reviewResponse.setComment(review.getComment());
        reviewResponse.setCreatedAt(review.getCreatedAt());

        return reviewResponse;
    }
}
