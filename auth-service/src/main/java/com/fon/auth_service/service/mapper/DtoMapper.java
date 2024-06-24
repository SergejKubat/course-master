package com.fon.auth_service.service.mapper;

import com.fon.auth_service.domain.Account;
import com.fon.auth_service.domain.Role;
import com.fon.auth_service.dto.response.AccountResponse;
import org.springframework.stereotype.Service;

@Service
public class DtoMapper {
    public AccountResponse mapToAccountResponse(Account account) {
        AccountResponse accountResponse = new AccountResponse();

        accountResponse.setId(account.getId());
        accountResponse.setUsername(account.getUsername());
        accountResponse.setEmail(account.getEmail());
        accountResponse.setFirstName(account.getFirstName());
        accountResponse.setLastName(account.getLastName());
        accountResponse.setOccupation(account.getOccupation());
        accountResponse.setDescription(account.getDescription());
        accountResponse.setAvatar(account.getAvatar());
        accountResponse.setRoles(account.getRoles().stream().map(Role::getName).toList());
        accountResponse.setCreatedAt(account.getCreatedAt());
        accountResponse.setUpdatedAt(account.getUpdatedAt());

        return accountResponse;
    }
}
