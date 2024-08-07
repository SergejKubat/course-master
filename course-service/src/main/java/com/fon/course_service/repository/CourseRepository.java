package com.fon.course_service.repository;

import com.fon.course_service.domain.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findByCategoryIdAndTitleContainsIgnoreCase(long categoryId, String query);

    List<Course> findByMentorIdAndTitleContainsIgnoreCase(long mentorId, String query);
}
