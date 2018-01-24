package io.github.devbhuwan.sales.domain.validation.validator;

import io.github.devbhuwan.sales.domain.validation.constraint.Capitalized;

import javax.validation.ConstraintValidatorContext;
import java.util.regex.Pattern;

public class CapitalizedValidatorImpl implements CapitalizedValidator {

    private static final String EMPTY_STRING = "";
    private static final Pattern CAPITALIZED_REGEX
            = Pattern.compile("^[A-Z][a-z0-9]*[^A-Za-z0-9]*$");

    @Override
    public void initialize(Capitalized capitalized) {

    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext constraintValidatorContext) {
        if (value == null || EMPTY_STRING.equals(value)) {
            return false;
        }
        boolean allGood = true;
        for (String word : value.split("\\s+")) {
            boolean isWordOk = CAPITALIZED_REGEX
                    .asPredicate()
                    .test(word);
            if (!isWordOk) {
                allGood = false;
                break;
            }
        }
        return allGood;
    }
}
