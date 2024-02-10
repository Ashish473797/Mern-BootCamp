### Problem 1: Custom Map Function

Implement a custom function customMap that mimics the behavior of the JavaScript Array.prototype.map method. It should not use the built-in map method and should work as expected when tested with an array.

### Solution:

```js
function customMap(arr, fun){
    let temp = [];
    for(let i = 0; i < arr.length; i++){
        temp[i] = fun(arr[i], i);
    }
    return temp;
}
```
<hr/>


### Problem 2: Fix the Filter

Given the following code, identify and fix the issues to make it work as intended. It’s supposed to filter out all negative numbers and return a new array.

```js
const numbers = [1, -2, 3, -4, 5];
const positives = numbers.filter(n => n < 0);
console.log(positives);
```

### Solution:

```js
const numbers = [1, -2, 3, -4, 5];
const positives = numbers.filter(n => n > 0);
console.log(positives);
```
<hr/>


### Problem 3: Nested Map and Filter

What is the output of the following code snippet?

```js
const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const result = arrays.map(arr => arr.filter(num => num % 2 === 0));
console.log(result);
```

### Solution:

`OUTPUT: [[2], [4, 6], [8]]`
<hr/>


### Problem 4: Sum of Squares

Write a JavaScript function that takes an array of numbers and returns the sum of the squares of
those numbers, using reduce.

### Solution:

```js
function sumOfSquare(arr){
    let sum = arr.reduce((accu, curr) => {
        return accu + curr * curr;
    }, 0);
    return sum;
}
```
<hr/>


### Problem 5: forEach with a Twist

What does the following code output?

```js
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
if (index % 2 === 0) sum += num;
});
console.log(sum);
```

### Solution:

`OUTPUT: 9`
<hr/>


### Problem 6: Array.from Issue

Explain why the following code doesn’t produce the expected output ( [1, 2, 3, 4, 5] ) and
correct it.

```js
const arrayLike = { length: 5 };
const newArray = Array.from(arrayLike, (v, i) => i);
console.log(newArray);
```

### Solution:

```js
const arrayLike = { length: 5 };
const newArray = Array.from(arrayLike, (v, i) => i+1);
console.log(newArray);
```
<hr/>


### Problem 7: Filtering and Accumulating

Using filter and reduce , write a function that takes an array of objects with properties name and value and returns the sum of the values of objects whose name property starts with the letter ‘a’ or ‘A’.

### Solution:

```js
function sumofA(arr){
    let sum = arr.filter((item) => {
        return (item.name[0] == 'a' || item.name[0] == 'A');
    })
    .reduce((accu, curr) => {
        return accu + curr.value;
    }, 0);
    return sum;
}
```
<hr/>


### Problem 8: Complex reduce

What is the output of the following code?

```js
const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce((acc, curr) => {
if (curr % 2 === 0) {
acc.even.push(curr);
} else {
acc.odd.push(curr);
}
return acc;
}, { odd: [], even: [] });
console.log(result);
```

### Solution:

`OUTPUT: { odd: [ 1, 3, 5 ], even: [ 2, 4 ] }`
<hr/>


### Problem 9: : Transforming an Array-Like Object

Create a function that takes an array-like object with numeric keys and transforms it into a proper array. For example, {0: 'a', 1: 'b', 2: 'c', length: 3} should be transformed into ['a','b', 'c'] .

### Solution:

```js
function transformInArray(obj){
    let arr = Array.from(obj);
    return arr;
}
```
<hr/>


### Problem 10: Unexpected forEach Behavior

The following code is intended to log each number multiplied by 2, but it’s not working as
expected. Identify and fix the issue.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
num *= 2;
});
console.log(numbers);
```

### Solution:

```js
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, idx) => {
numbers[idx] = num *= 2;
});
console.log(numbers);
```
<hr/>


### Problem 11: Implement customFilter

Create a function customFilter that mimics the behavior of the JavaScript Array.prototype.filter method. It should not use the built-in filter method. The function should handle cases where the callback function returns truthy or falsy values, not just true or false .

### Solution:

```js
function customFilter(arr, fun){
    let tempArr = [];
    for(let i = 0; i < arr.length; i++){
        if(fun(arr[i], i)){
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}
```
<hr/>


### Problem 12: Analyze Recursive Reduce

The following recursive reduce function is intended to flatten an array of arrays into a single array, but it contains errors. Identify and fix them:

```js
function flattenArray(arr) {
return arr.reduce((acc, val) => {
if (Array.isArray(val)) {
acc.concat(flattenArray(val));
} else {
acc.push(val);
}
return acc;
}, []);
}
```

### Solution:

```js
function flattenArray(arr) {
return arr.reduce((acc, val) => {
if (Array.isArray(val)) {
return acc.concat(flattenArray(val));
} else {
acc.push(val);
}
return acc;
}, []);
}
```
<hr/>


### Problem 13: Chaining Array Methods

What is the output of the following code snippet? Explain the process.

```js
const data = [1, '2', 3, '4', 5];
const result = data
.map(item => parseInt(item))
.filter(item => !isNaN(item))
.reduce((acc, item) => acc + item, 0);
console.log(result);
```

### Solution:

`OUTPUT: 15`
<hr/>


### Problem 14: Nested Object Transformation

Write a function that takes an array of objects with nested objects and transforms each nested object’s key-value pairs into arrays of [key, value] . Use map and reduce .

### Solution:

```js
let arr = [{a: {x: 1,y: 2}}, {b: {z: 3,w: 4}}, {c: {p: 5,q: 6}}];

function transformNestedObjects(arr) {
  return arr.map(obj => {
    return Object.keys(obj).reduce((acc, key) => {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        acc[key] = Object.entries(obj[key]);
      } else {
        acc[key] = obj[key];
      }
      return acc;
    }, {});
  });
}
```
<hr/>


### Problem 15: forEach with Objects

Given the following code, what will be logged to the console?

```js
const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj).forEach(key => {
obj[key] *= 2;
});
console.log(obj);
```

### Solution:

```js
OUTPUT: { a: 2, b: 4, c: 6 }
```
<hr/>


### Problem 16: Complex Array.from Usage

The following code is intended to create an array of objects from an array-like object, but it doesn’t work as expected. Identify and fix the issues:

```js
const arrayLike = {0: 'apple', 1: 'banana', 2: 'cherry', length: 3};
const fruits = Array.from(arrayLike, key => ({name: key}));
console.log(fruits);
```

### Solution:

```js
const arrayLike = {0: 'apple', 1: 'banana', 2: 'cherry', length: 3};
const fruits = Array.from(arrayLike, (value, key) => ({name: value}));
console.log(fruits);
```
<hr/>


### Problem 17: Multi-level Grouping

Using reduce , write a function that takes an array of objects and groups them by a specified key, and within each group, further groups them by another key. The function should be flexible to work with any keys.

### Solution:

```js
function groupObjectsByKeys(array, groupByKey, subGroupByKey) {
    return array.reduce((result, obj) => {
        const groupKey = obj[groupByKey];
        const subGroupKey = obj[subGroupByKey];

        // Create the group if it doesn't exist
        if (!result[groupKey]) {
            result[groupKey] = {};
        }

        // Create the sub-group if it doesn't exist
        if (!result[groupKey][subGroupKey]) {
            result[groupKey][subGroupKey] = [];
        }

        // Push the object to the corresponding sub-group
        result[groupKey][subGroupKey].push(obj);

        return result;
    }, {});
}

// Example usage:
const data = [
    { category: 'Fruit', type: 'Apple', color: 'Red' },
    { category: 'Fruit', type: 'Banana', color: 'Yellow' },
    { category: 'Vegetable', type: 'Carrot', color: 'Orange' },
    { category: 'Fruit', type: 'Cherry', color: 'Red' },
    { category: 'Vegetable', type: 'Lettuce', color: 'Green' }
];

const groupedData = groupObjectsByKeys(data, 'category', 'color');
console.log(groupedData);
```
<hr/>


### Problem 18: : Interplay of Map, Filter, and Reduce

Analyze and determine the output of the following complex sequence of map , filter , and reduce :

```js
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
.map(num => num * 2)
.filter(num => num % 3 === 0)
.reduce((acc, num) => acc + num, 0);
console.log(result);
```

### Solution:

`OUTPUT: 18`
<hr/>


### Problem 19: Array-Like Object Operations

Create a function that takes an array-like object and a callback function. This function should behave like the forEach method, applying the callback to each property of the object that represents an array element

### Solution:

```js
let arrLike = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    length: 5,
}

function arrLikeasForeach(arr, fun){
    let tempArr = Array.from(arr);
    for(let i = 0; i < arr.length; i++){
        fun(tempArr[i], i);
    }
}

arrLikeasForeach(arrLike, (item, idx) => {
    arrLike[idx] = item * 2;
});

console.log(arrLike);
```
<hr/>


### Problem 20:  Reduce with Initial Object

The following code is supposed to create an object that counts the occurrences of each string in an array, but it has errors. Fix the code

```js
const strings = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = strings.reduce((acc, str) => {
acc[str] = acc[str] ? acc[str]++ : 1;
return acc;
}, {});
console.log(count);
```

### Solution:

```js
const strings = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = strings.reduce((acc, str) => {
acc[str] = acc[str] ? ++acc[str] : 1;
return acc;
}, {});
console.log(count);
```
<hr/>