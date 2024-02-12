function extractDateParts(pattern, string) {
    // Creating a regular expression object with the given pattern
    var regex = new RegExp(pattern);

    // Executing the regular expression pattern against the string
    var match = regex.exec(string);

    if (match) {
        // Extracting matched groups
        var groups = match.slice(1); // Extracting capture groups excluding the full match

        return groups;
    } else {
        return null; // Return null if no match is found
    }
}

// Test the function with different date patterns
const dateString = "Today is 2024-02-12";

// Using a pattern to capture year, month, and day separately
const datePattern = /(\d{4})-(\d{2})-(\d{2})/;

const dateParts = extractDateParts(datePattern, dateString);

if (dateParts) {
    console.log("Year:", dateParts[0]);
    console.log("Month:", dateParts[1]);
    console.log("Day:", dateParts[2]);
} else {
    console.log("No date found in the string.");
}
