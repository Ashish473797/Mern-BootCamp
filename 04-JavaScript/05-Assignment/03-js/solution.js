function findCharacterClasses(inputString) {
    // Define regular expression patterns for character classes
    const digitPattern = /\d/g; // Matches any digit
    const uppercasePattern = /[A-Z]/g; // Matches any uppercase letter
    const lowercasePattern = /[a-z]/g; // Matches any lowercase letter
    const specialCharPattern = /[^a-zA-Z0-9\s]/g; // Matches any special character (not alphanumeric or whitespace)

    // Find matches for each character class
    const digits = inputString.match(digitPattern) || [];
    const uppercaseLetters = inputString.match(uppercasePattern) || [];
    const lowercaseLetters = inputString.match(lowercasePattern) || [];
    const specialChars = inputString.match(specialCharPattern) || [];

    // Return the matches
    return {
        digits: digits,
        uppercaseLetters: uppercaseLetters,
        lowercaseLetters: lowercaseLetters,
        specialChars: specialChars
    };
}

// Test the function with a sample string
const testString = "Hello 123 World! @#";

const characterClasses = findCharacterClasses(testString);

console.log("Digits:", characterClasses.digits);
console.log("Uppercase Letters:", characterClasses.uppercaseLetters);
console.log("Lowercase Letters:", characterClasses.lowercaseLetters);
console.log("Special Characters:", characterClasses.specialChars);
