package com.fon.course_service.service;

import com.fon.course_service.dto.response.category.CategoriesResponse;
import com.fon.course_service.dto.response.category.CategoryResponse;

import java.util.List;

public interface CategoryService {
    List<CategoriesResponse> getAll();

    CategoryResponse getById(long id);
}
