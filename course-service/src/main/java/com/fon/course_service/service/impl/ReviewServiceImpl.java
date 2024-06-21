package com.fon.course_service.service.impl;

import com.fon.course_service.domain.Course;
import com.fon.course_service.domain.Review;
import com.fon.course_service.dto.request.review.ReviewRequest;
import com.fon.course_service.dto.response.review.ReviewResponse;
import com.fon.course_service.exception.ResourceNotFoundException;
import com.fon.course_service.repository.CourseRepository;
import com.fon.course_service.repository.ReviewRepository;
import com.fon.course_service.service.ReviewService;
import com.fon.course_service.service.mapper.DtoMapper;
import com.fon.course_service.service.mapper.EntityMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final CourseRepository courseRepository;

    private final DtoMapper dtoMapper;
    private final EntityMapper entityMapper;

    public ReviewServiceImpl(ReviewRepository reviewRepository,
                             CourseRepository courseRepository,
                             DtoMapper dtoMapper,
                             EntityMapper entityMapper) {
        this.reviewRepository = reviewRepository;
        this.courseRepository = courseRepository;
        this.dtoMapper = dtoMapper;
        this.entityMapper = entityMapper;
    }

    @Override
    public List<ReviewResponse> getAllByCourseId(long courseId) {
        return reviewRepository.findByCourseId(courseId).stream().map(dtoMapper::mapToReviewResponse).toList();
    }

    @Override
    public List<ReviewResponse> getAllByStudentId(long studentId) {
        return reviewRepository.findByStudentId(studentId).stream().map(dtoMapper::mapToReviewResponse).toList();
    }

    @Override
    public ReviewResponse getById(long id) {
        // check if review exists
        Review review = reviewRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Review", "id", String.valueOf(id))
        );

        return dtoMapper.mapToReviewResponse(review);
    }

    @Override
    public ReviewResponse create(ReviewRequest reviewRequest) {
        // check if course exists
        Course course = courseRepository.findById(reviewRequest.getCourseId()).orElseThrow(
                () -> new ResourceNotFoundException("Course", "id", String.valueOf(reviewRequest.getCourseId()))
        );

        // map dto to review entity
        Review review = entityMapper.mapToReviewEntity(reviewRequest);

        review.setCourse(course);

        // create review
        Review newReview = reviewRepository.save(review);

        setNewAverageRating(course);

        return dtoMapper.mapToReviewResponse(newReview);
    }

    @Override
    public ReviewResponse update(long id, ReviewRequest reviewRequest) {
        // check if review exists
        Review review = reviewRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Review", "id", String.valueOf(id))
        );

        // check if course exists
        Course course = courseRepository.findById(reviewRequest.getCourseId()).orElseThrow(
                () -> new ResourceNotFoundException("Course", "id", String.valueOf(reviewRequest.getCourseId()))
        );

        // change values
        review.setStudentId(reviewRequest.getStudentId());
        review.setRating(reviewRequest.getRating());
        review.setComment(reviewRequest.getComment());
        review.setCourse(course);

        // update review
        Review updatedReview = reviewRepository.save(review);

        setNewAverageRating(course);

        return dtoMapper.mapToReviewResponse(updatedReview);
    }

    @Override
    public void delete(long id) {
        // check if review exists
        Review review = reviewRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Review", "id", String.valueOf(id))
        );

        reviewRepository.delete(review);
    }

    private void setNewAverageRating(Course course) {
        // get all course reviews
        List<Review> reviews = reviewRepository.findByCourseId(course.getId());

        // calculate new average rating for course
        int ratingTotalSum = 0;
        int ratingTotalCount = reviews.size();

        for (Review r : reviews) {
            ratingTotalSum += r.getRating();
        }

        double averageRating = (double) ratingTotalSum / ratingTotalCount;

        // update course average rating
        course.setAverageRating(averageRating);

        courseRepository.save(course);
    }
}
