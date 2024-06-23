package com.fon.auth_service.service.impl;

import com.fon.auth_service.dto.request.RegisterRequest;
import com.fon.auth_service.dto.request.UpdateAccountRequest;
import com.fon.auth_service.dto.response.AccountResponse;
import com.fon.auth_service.repository.AccountRepository;
import com.fon.auth_service.repository.RoleRepository;
import com.fon.auth_service.service.AccountService;

public class AccountServiceImpl implements AccountService {
    private final AccountRepository accountRepository;
    private final RoleRepository roleRepository;

    public AccountServiceImpl(AccountRepository accountRepository, RoleRepository roleRepository) {
        this.accountRepository = accountRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public AccountResponse getById(long id) {
        return null;
    }

    @Override
    public AccountResponse getCurrent() {
        return null;
    }

    @Override
    public AccountResponse create(RegisterRequest registerRequest) {
        return null;
    }

    @Override
    public AccountResponse update(UpdateAccountRequest updateUserRequest) {
        return null;
    }
}
