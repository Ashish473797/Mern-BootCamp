class ArrayPolyfill {
    constructor(array) {
        this.array = array;
    }

    customIncludes(searchElement) {
        if (this.array == null) {
            throw new TypeError('"this" is null or not defined');
        }

        const length = this.array.length;

        let startIndex = 0;

        for (let i = startIndex; i < length; i++) {
            if (this.array[i] === searchElement) {
                return true;
            }
        }

        return false;
    }
}

// Test
const array = [1, 2, 3, 4, 5];
const polyfillArray = new ArrayPolyfill(array);

console.log(polyfillArray.customIncludes(3)); // Output: true
console.log(polyfillArray.customIncludes(6)); // Output: false
