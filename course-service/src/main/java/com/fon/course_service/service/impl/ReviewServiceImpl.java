package com.fon.course_service.service.impl;

import com.fon.course_service.client.AuthClient;
import com.fon.course_service.domain.Course;
import com.fon.course_service.domain.Review;
import com.fon.course_service.dto.request.review.ReviewRequest;
import com.fon.course_service.dto.response.account.AccountResponse;
import com.fon.course_service.dto.response.review.ReviewResponse;
import com.fon.course_service.dto.response.review.ReviewStudentResponse;
import com.fon.course_service.exception.BadRequestException;
import com.fon.course_service.exception.ResourceNotFoundException;
import com.fon.course_service.repository.CourseRepository;
import com.fon.course_service.repository.ReviewRepository;
import com.fon.course_service.service.ReviewService;
import com.fon.course_service.service.mapper.DtoMapper;
import com.fon.course_service.service.mapper.EntityMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final CourseRepository courseRepository;

    private final AuthClient authClient;

    private final DtoMapper dtoMapper;
    private final EntityMapper entityMapper;

    public ReviewServiceImpl(ReviewRepository reviewRepository,
                             CourseRepository courseRepository,
                             AuthClient authClient,
                             DtoMapper dtoMapper,
                             EntityMapper entityMapper) {
        this.reviewRepository = reviewRepository;
        this.courseRepository = courseRepository;
        this.authClient = authClient;
        this.dtoMapper = dtoMapper;
        this.entityMapper = entityMapper;
    }

    @Override
    public List<ReviewResponse> getAllByCourseId(long courseId) {
        List<Review> reviews = reviewRepository.findByCourseId(courseId);

        List<ReviewResponse> reviewResponses = new ArrayList<>();

        for (Review review : reviews) {
            // get student's account from auth service
            AccountResponse accountResponse = authClient.getAccount(review.getStudentId());

            // check if student's account exists
            if (accountResponse == null) {
                throw new BadRequestException("Student's account doesn't exist.");
            }

            ReviewStudentResponse reviewStudentResponse = new ReviewStudentResponse(accountResponse.getId(),
                    accountResponse.getFirstName(),
                    accountResponse.getLastName(),
                    accountResponse.getAvatar());

            ReviewResponse reviewResponse = dtoMapper.mapToReviewResponse(review);

            reviewResponse.setStudent(reviewStudentResponse);

            reviewResponses.add(reviewResponse);
        }

        return reviewResponses;
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

        // get course
        Course course = review.getCourse();

        // delete review
        reviewRepository.delete(review);

        setNewAverageRating(course);
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
