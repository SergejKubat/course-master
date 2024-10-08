package com.fon.auth_service.controller;

import com.fon.auth_service.dto.request.LoginRequest;
import com.fon.auth_service.dto.request.RegisterRequest;
import com.fon.auth_service.dto.response.AccountResponse;
import com.fon.auth_service.dto.response.LoginResponse;
import com.fon.auth_service.exception.BadRequestException;
import com.fon.auth_service.service.AccountService;
import com.fon.auth_service.service.impl.JwtService;
import com.fon.auth_service.service.impl.PasswordValidationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Authentication")
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final AccountService accountService;
    private final JwtService jwtService;

    private final PasswordValidationService passwordValidationService;

    public AuthController(AuthenticationManager authenticationManager,
                          AccountService accountService,
                          JwtService jwtService,
                          PasswordValidationService passwordValidationService) {
        this.authenticationManager = authenticationManager;
        this.accountService = accountService;
        this.jwtService = jwtService;
        this.passwordValidationService = passwordValidationService;
    }

    @PostMapping("/register")
    public ResponseEntity<AccountResponse> register(@RequestBody RegisterRequest registerRequest) {
        return new ResponseEntity<>(accountService.create(registerRequest), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        // check password strength
        if (!passwordValidationService.validatePassword(loginRequest.getPassword())) {
            throw new BadRequestException(
                    passwordValidationService.getValidationMessages(loginRequest.getPassword()).get(0)
            );
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()
                ));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtService.generateToken(authentication);

        return new ResponseEntity<>(new LoginResponse(token, jwtService.getExpirationTime()), HttpStatus.OK);
    }
}
