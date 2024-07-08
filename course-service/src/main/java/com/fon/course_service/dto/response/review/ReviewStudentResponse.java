package com.fon.course_service.dto.response.review;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReviewStudentResponse {
    public long id;

    public String firstName;

    public String lastName;

    public String avatar;
}
