package com.fon.auth_service.service;

import com.fon.auth_service.dto.request.RegisterRequest;
import com.fon.auth_service.dto.request.UpdateAccountRequest;
import com.fon.auth_service.dto.response.AccountResponse;

public interface AccountService {
    AccountResponse getById(long id);

    AccountResponse getCurrent();

    AccountResponse create(RegisterRequest registerRequest);

    AccountResponse update(UpdateAccountRequest updateUserRequest);
}
