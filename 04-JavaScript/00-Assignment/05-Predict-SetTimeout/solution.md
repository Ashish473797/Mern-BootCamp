# Predict the out of following questions without executing them:


### Problem 1
```
console.log("A");
setTimeout(() => console.log("B"), 1000);
console.log("C");
```

### Solution:
`OUTPUT: A, C, B`
<hr/>



### Problem 2
```
setTimeout(() => {
    console.log("A");
    setTimeout(() => console.log("B"), 1000);
}, 1000);
console.log("C");
```

### Solution:
`OUTPUT: C, A, B`
<hr/>



### Problem 3
```
setTimeout(() => console.log("A"), 3000);
setTimeout(() => console.log("B"), 2000);
setTimeout(() => console.log("C"), 1000);
```

### Solution: 
`OUTPUT: C, B, A`
<hr/>



### Problem 4
```
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
```

### Solution:
`OUTPUT: A, C, B`
<hr/>



### Problem 5
```
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
```

### Solution:
`OUTPUT: 3, 3, 3`
<hr/>



### Problem 6
```
setTimeout(() => {
    console.log("A");
    setTimeout(() => {
        console.log("B");
        setTimeout(() => console.log("C"), 500);
    }, 1000);
}, 1500);
```

### Solution:
`OUTPUT: A, B, C`
<hr/>



### Problem 7
```
console.log("A");
setTimeout(() => console.log("B"), 1000);
for(let i = 0; i < 1000000000; i++) {}  // Long loop
console.log("C");
```

### Solution:
`OUTPUT: A, C, B`
<hr/>



### problem 8
```
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), i * 1000);
}
```

### Solution:
`OUTPUT: 3, 3, 3`
<hr/>



### Problem 9
```
for (var i = 0; i < 3; i++) {
    setTimeout((j) => {
        console.log(j);
        setTimeout(() => console.log(j + 1), 1000);
    }, i * 2000, i);
}
```

### Solution:
`OUTPUT: 0, 1, 1, 2, 2, 3`
<hr/>



### Problem 10
```
setTimeout(() => console.log("A"), 2500);
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("B" + i);
        setTimeout(() => {
            console.log("C" + i);
        }, i * 500 + 500);
    }, i * 1000);
}
```

### Solution:
`OUTPUT: B0, C0, B1, B2, C1, A, C2`
<hr/>



### Problem 11
```
function first(callback) {
    setTimeout(() => {
        console.log("first");
        callback();
    }, 500);
}
function second() {
    console.log("second");
}
first(second);
```

### Solution:
`OUTPUT: first, second`
<hr/>

### Problem 12
```
let count = 0;
setTimeout(() => console.log(count++), 1000);
setTimeout(() => console.log(count++), 2000);
setTimeout(() => console.log(count++), 3000);
```

### Solution:
`OUTPUT: 0, 1, 2`
<hr/>



### Problem 13
```
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000 * i);
}
```

### Solution:
`OUTPUT: 0, 1, 2`
<hr/>



### Problem 14
```
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(() => console.log(j), 2000 * j);
    })(i);
}
```

### Solution: 
`OUTPUT: 0, 1, 2`
<hr/>



### Problem 15
```
console.log("1");
setTimeout(() => {
    console.log("2");
    setTimeout(() => console.log("3"), 1000);
}, 2000);
setTimeout(() => console.log("4"), 1000);
console.log("5");
```

### Solution:
`OUTPUT: 1, 5, 4, 2, 3`
<hr/>