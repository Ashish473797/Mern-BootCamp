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

Using filter and reduce , write a function that takes an array of objects with properties name
and value and returns the sum of the values of objects whose name property starts with the letter
‘a’ or ‘A’.

### Solution:

```js

```
<hr/>