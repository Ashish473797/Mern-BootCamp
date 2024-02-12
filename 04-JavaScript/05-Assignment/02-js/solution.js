// Function to test a regex pattern against a string
function testRegex(pattern, string) {
    // Creating a regular expression object with the given pattern
    var regex = new RegExp(pattern);

    // Using the test method of the regular expression object to check for a match
    return regex.test(string);
}

// Testing the function with various patterns and strings
console.log(testRegex("hello", "hello world")); // true
console.log(testRegex("hello", "world"));       // false

console.log(testRegex("\\d", "123"));            // true (checks for any digit)
console.log(testRegex("\\d", "abc"));            // false

console.log(testRegex("^[A-Z]", "Hello"));       // true (checks if string starts with an uppercase letter)
console.log(testRegex("^[A-Z]", "hello"));       // false

console.log(testRegex("a|b", "a"));             // true (checks if string contains 'a' or 'b')
console.log(testRegex("a|b", "c"));             // false

console.log(testRegex("\\d{3}-\\d{2}-\\d{4}", "123-45-6789")); // true (checks for a SSN format)
console.log(testRegex("\\d{3}-\\d{2}-\\d{4}", "12-3456-7890")); // false
