function outerFunction(parameter) {
    var internalVariable = 10; // Variable declared within outerFunction

    // Inner function defined within outerFunction
    function innerFunction() {
        // Accessing both the parameter of outerFunction and the internalVariable
        console.log("Parameter of outerFunction:", parameter);
        console.log("Internal variable of outerFunction:", internalVariable);
    }

    // Returning the inner function
    return innerFunction;
}

// Example usage:
var innerFunc = outerFunction("Hello");
innerFunc(); // This will log "Hello" and "10" to the console.
