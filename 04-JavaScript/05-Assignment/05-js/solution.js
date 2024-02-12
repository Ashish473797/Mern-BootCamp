function calculateDeliveryTime(packageType) {
    // Initialize a variable to hold the estimated delivery time
    let estimatedTime;

    // Use a switch statement to calculate the estimated delivery time based on the package type
    switch (packageType) {
        case "standard":
            estimatedTime = "3-5 days";
            break;
        case "express":
            estimatedTime = "1-2 days";
            break;
        case "overnight":
            estimatedTime = "next day";
            break;
        default:
            estimatedTime = "Unknown"; // Handle unknown package types
            break;
    }

    // Print the estimated delivery time to the console
    console.log(`Estimated delivery time for ${packageType} package: ${estimatedTime}`);
}

// Test the function with different package types
calculateDeliveryTime("standard");
calculateDeliveryTime("express");
calculateDeliveryTime("overnight");
calculateDeliveryTime("prime"); // Unknown package type
