### Problem 1: NaN

If NaN is never equal to itself, let's say that we want to write a function that returns NaN for something,
but now how do we check if the function returned NaN ? 

### Solution:

```js
function fun() {
    // does something
    return NaN;
}

const response = fun();

// How to check if the value in response variable is NaN
if(isNaN(response)){
    console.log('response contain: ',response);
}
```
<hr/>


### Problem 2: Zero
If +0 and -0 and 0 when used with equality operators always give the ans as true,
how can you identify whether the sign of the 0 is + or - ? 
So write a function that can compare 0 and -0 and if user passes 0 and -0 then it returns false
And write function getSign() which takes a number and tells you whether it is pos or neg

### Solution:

```js
function compareZero(a, b){
    if(a === 0 && b === 0 && !Object.is(a, b)){
        return false;
    }
    return true;
}


function getSign(a){
    if(a > 0)
    console.log('Positive Number');
    else if(a < 0)
    console.log('Negative Number');
    else if(compareZero(a, -0))
    console.log('Negative Zero');
    else
    console.log('Zero');
}
```
<hr/>