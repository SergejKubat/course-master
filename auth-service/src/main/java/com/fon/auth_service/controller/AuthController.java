package com.fon.auth_service.controller;

import com.fon.auth_service.dto.request.RegisterRequest;
import com.fon.auth_service.dto.response.AccountResponse;
import com.fon.auth_service.service.AccountService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Authentication")
@RestController
@CrossOrigin
@RequestMapping("/api/auth")
public class AuthController {
    private final AccountService accountService;

    public AuthController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<AccountResponse> getById(@PathVariable(value = "id") long id) {
        return new ResponseEntity<>(accountService.getById(id), HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<AccountResponse> create(@RequestBody RegisterRequest registerRequest) {
        return new ResponseEntity<>(accountService.create(registerRequest), HttpStatus.CREATED);
    }
}
