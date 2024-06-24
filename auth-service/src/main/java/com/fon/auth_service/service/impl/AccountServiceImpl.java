package com.fon.auth_service.service.impl;

import com.fon.auth_service.domain.Account;
import com.fon.auth_service.domain.Role;
import com.fon.auth_service.dto.request.RegisterRequest;
import com.fon.auth_service.dto.request.UpdateAccountRequest;
import com.fon.auth_service.dto.response.AccountResponse;
import com.fon.auth_service.exception.BadRequestException;
import com.fon.auth_service.exception.ResourceNotFoundException;
import com.fon.auth_service.repository.AccountRepository;
import com.fon.auth_service.repository.RoleRepository;
import com.fon.auth_service.service.AccountService;
import com.fon.auth_service.service.mapper.DtoMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class AccountServiceImpl implements AccountService {
    private final AccountRepository accountRepository;
    private final RoleRepository roleRepository;

    private final PasswordEncoder passwordEncoder;

    private final DtoMapper dtoMapper;

    public AccountServiceImpl(AccountRepository accountRepository,
                              RoleRepository roleRepository,
                              PasswordEncoder passwordEncoder,
                              DtoMapper dtoMapper) {
        this.accountRepository = accountRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.dtoMapper = dtoMapper;
    }

    @Override
    public AccountResponse getById(long id) {
        Account account = accountRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Account", "id", String.valueOf(id))
        );

        return dtoMapper.mapToAccountResponse(account);
    }

    @Override
    public AccountResponse getCurrent() {
        return null;
    }

    @Override
    public AccountResponse create(RegisterRequest registerRequest) {
        // check if username already exists
        if (accountRepository.existsByUsername(registerRequest.getUsername())) {
            throw new BadRequestException("Username already exists.");
        }

        // check if email already exists
        if (accountRepository.existsByEmail(registerRequest.getEmail())) {
            throw new BadRequestException("Email already exists.");
        }

        // create new user
        Account account = new Account();

        account.setUsername(registerRequest.getUsername());
        account.setEmail(registerRequest.getEmail());
        account.setFirstName(registerRequest.getFirstName());
        account.setLastName(registerRequest.getLastName());
        account.setPassword(passwordEncoder.encode(registerRequest.getPassword()));

        // find student role
        Role studentRole = roleRepository.findByName("student").orElseThrow(
                () -> new ResourceNotFoundException("Role", "name", "student")
        );

        // add role
        Set<Role> roles = new HashSet<>();

        roles.add(studentRole);

        account.setRoles(roles);

        return dtoMapper.mapToAccountResponse(accountRepository.save(account));
    }

    @Override
    public AccountResponse update(UpdateAccountRequest updateUserRequest) {
        return null;
    }
}
