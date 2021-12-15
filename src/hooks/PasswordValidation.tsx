import { useState, useEffect } from 'react';

export const PasswordValidation = ({
    firstPassword = "",
    secondPassword = "",
    requiredLength = 8,
}) => {
    const [validLength, setValidLength] = useState<boolean>();
    const [hasNumber, setHasNumber] = useState<boolean>();
    const [upperCase, setUpperCase] = useState<boolean>();
    const [lowerCase, setLowerCase] = useState<boolean>();
    const [specialChar, setSpecialChar] = useState<boolean>();

    useEffect(() => {
        setValidLength(firstPassword.length >= requiredLength);
        setUpperCase(firstPassword.toLowerCase() !== firstPassword);
        setLowerCase(firstPassword.toUpperCase() !== firstPassword);
        setHasNumber(/\d/.test(firstPassword));
        setSpecialChar(/[ `!@#$%^&*()_+-=]{};':"\|,.<>?~]/.test(firstPassword));
    }, [firstPassword, secondPassword, requiredLength]);

    return [validLength, hasNumber, upperCase, lowerCase, specialChar];
}