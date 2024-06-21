package com.fon.course_service.service.impl;

import com.fon.course_service.domain.Category;
import com.fon.course_service.dto.response.category.CategoriesResponse;
import com.fon.course_service.dto.response.category.CategoryResponse;
import com.fon.course_service.exception.ResourceNotFoundException;
import com.fon.course_service.repository.CategoryRepository;
import com.fon.course_service.service.CategoryService;
import com.fon.course_service.service.mapper.DtoMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;

    private final DtoMapper dtoMapper;

    public CategoryServiceImpl(CategoryRepository categoryRepository, DtoMapper dtoMapper) {
        this.categoryRepository = categoryRepository;
        this.dtoMapper = dtoMapper;
    }

    @Override
    public List<CategoriesResponse> getAll() {
        return categoryRepository.findAll().stream().map(dtoMapper::mapToCategoriesResponse).toList();
    }

    @Override
    public CategoryResponse getById(long id) {
        Category category = categoryRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Category", "id", String.valueOf(id))
        );

        return dtoMapper.mapToCategoryResponse(category);
    }
}
