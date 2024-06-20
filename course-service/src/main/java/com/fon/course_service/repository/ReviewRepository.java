package com.fon.course_service.repository;

import com.fon.course_service.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByCourseId(long courseId);

    List<Review> findByStudentId(long studentId);
}
