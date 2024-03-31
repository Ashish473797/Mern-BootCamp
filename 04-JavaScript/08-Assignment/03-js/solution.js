class Calculator {
    constructor(value) {
        this.result = value;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result /= value;
        return this;
    }
}

// Demonstration
const calc = new Calculator(10);
const result = calc.add(5).subtract(3).multiply(2).divide(4).result;
console.log("Result:", result);
