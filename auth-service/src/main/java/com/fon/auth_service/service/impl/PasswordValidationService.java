package com.fon.auth_service.service.impl;

import com.fon.auth_service.utils.FeatureFlags;
import io.getunleash.Unleash;
import org.passay.PasswordData;
import org.passay.PasswordValidator;
import org.passay.RuleResult;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PasswordValidationService {

    private final PasswordValidator passwordValidator;
    private final PasswordValidator strongPasswordValidator;

    private final Unleash unleash;

    public PasswordValidationService(
            @Qualifier("passwordValidator") PasswordValidator passwordValidator,
            @Qualifier("strongPasswordValidator") PasswordValidator strongPasswordValidator,
            Unleash unleash
    ) {
        this.passwordValidator = passwordValidator;
        this.strongPasswordValidator = strongPasswordValidator;
        this.unleash = unleash;
    }

    public boolean validatePassword(String password) {

        PasswordData passwordData = new PasswordData(password);

        boolean strongPasswordPolicyEnabled = unleash.isEnabled(FeatureFlags.STRONG_PASSWORD_POLICY);

        RuleResult result = strongPasswordPolicyEnabled ?
                strongPasswordValidator.validate(passwordData)
                :
                passwordValidator.validate(passwordData);

        return result.isValid();
    }

    public List<String> getValidationMessages(String password) {
        PasswordData passwordData = new PasswordData(password);

        boolean strongPasswordPolicyEnabled = unleash.isEnabled(FeatureFlags.STRONG_PASSWORD_POLICY);

        RuleResult result = strongPasswordPolicyEnabled ?
                strongPasswordValidator.validate(passwordData)
                :
                passwordValidator.validate(passwordData);

        return strongPasswordPolicyEnabled ?
                strongPasswordValidator.getMessages(result)
                :
                passwordValidator.getMessages(result);
    }
}
