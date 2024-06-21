package com.fon.course_service.dto.response.category;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoriesResponse {
    private long id;

    private String name;

    private String thumbnailUrl;
}
