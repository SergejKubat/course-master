package com.fon.auth_service.service.impl;

import com.fon.auth_service.domain.Account;
import com.fon.auth_service.domain.Role;
import com.fon.auth_service.dto.request.ChangePasswordRequest;
import com.fon.auth_service.dto.request.RegisterRequest;
import com.fon.auth_service.dto.request.UpdateAccountRequest;
import com.fon.auth_service.dto.response.AccountResponse;
import com.fon.auth_service.exception.BadRequestException;
import com.fon.auth_service.exception.ResourceNotFoundException;
import com.fon.auth_service.repository.AccountRepository;
import com.fon.auth_service.repository.RoleRepository;
import com.fon.auth_service.service.AccountService;
import com.fon.auth_service.service.mapper.DtoMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
        Account currentAccount = getCurrentAccount();

        return dtoMapper.mapToAccountResponse(currentAccount);
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
    public AccountResponse update(long id, UpdateAccountRequest updateUserRequest) {
        // check if account exists
        Account account = accountRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Account", "id", String.valueOf(id))
        );

        // update data
        account.setFirstName(updateUserRequest.getFirstName());
        account.setLastName(updateUserRequest.getLastName());
        account.setOccupation(updateUserRequest.getOccupation());
        account.setDescription(updateUserRequest.getDescription());
        account.setAvatar(updateUserRequest.getAvatar());

        return dtoMapper.mapToAccountResponse(accountRepository.save(account));
    }

    @Override
    public void changePassword(ChangePasswordRequest changePasswordRequest) {
        Account currentAccount = getCurrentAccount();

        // check if old password is correct
        if (!passwordEncoder.matches(changePasswordRequest.getOldPassword(), currentAccount.getPassword())) {
            throw new BadRequestException("Old password is not correct.");
        }

        // change password
        currentAccount.setPassword(passwordEncoder.encode(changePasswordRequest.getNewPassword()));

        accountRepository.save(currentAccount);
    }

    private Account getCurrentAccount() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String currentUsername = authentication.getName();

        return accountRepository.findByUsernameOrEmail(currentUsername, currentUsername).orElseThrow(
                () -> new ResourceNotFoundException("Account", "username", currentUsername)
        );
    }
}
