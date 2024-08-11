package com.fon.auth_service.config;

import org.passay.CharacterRule;
import org.passay.EnglishCharacterData;
import org.passay.LengthRule;
import org.passay.PasswordValidator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class PasswordValidatorConfiguration {

    @Bean
    public PasswordValidator passwordValidator() {
        LengthRule lengthRule = new LengthRule(8, 32);

        CharacterRule lowerCaseRule = new CharacterRule(EnglishCharacterData.LowerCase, 1);
        CharacterRule upperCaseRule = new CharacterRule(EnglishCharacterData.UpperCase, 1);
        CharacterRule digitRule = new CharacterRule(EnglishCharacterData.Digit, 1);

        return new PasswordValidator(Arrays.asList(
                lengthRule,
                lowerCaseRule,
                upperCaseRule,
                digitRule
        ));
    }

    @Bean
    public PasswordValidator strongPasswordValidator() {
        LengthRule lengthRule = new LengthRule(12, 32);

        CharacterRule lowerCaseRule = new CharacterRule(EnglishCharacterData.LowerCase, 2);
        CharacterRule upperCaseRule = new CharacterRule(EnglishCharacterData.UpperCase, 2);
        CharacterRule digitRule = new CharacterRule(EnglishCharacterData.Digit, 2);
        CharacterRule specialRule = new CharacterRule(EnglishCharacterData.Special, 2);

        return new PasswordValidator(Arrays.asList(
                lengthRule,
                lowerCaseRule,
                upperCaseRule,
                digitRule,
                specialRule
        ));
    }
}
