package com.fon.auth_service.controller;

import com.fon.auth_service.dto.request.UpdateAccountRequest;
import com.fon.auth_service.dto.response.AccountResponse;
import com.fon.auth_service.service.AccountService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Accounts")
@RestController
@CrossOrigin
@RequestMapping("/api/accounts")
public class AccountController {
    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<AccountResponse> getById(@PathVariable(value = "id") long id) {
        return new ResponseEntity<>(accountService.getById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AccountResponse> update(
            @PathVariable(value = "id") long id,
            @RequestBody UpdateAccountRequest updateAccountRequest) {
        return new ResponseEntity<>(accountService.update(id, updateAccountRequest), HttpStatus.OK);
    }
}
