
## Easy: Predict the output

#### Question 1
```javascript
let promise = Promise.resolve(3);
promise.then(value => console.log(value));
```
`OUTPUT: 3`
<hr/>


#### Question 2
```javascript
let promise = new Promise((resolve, reject) => {
  resolve("Success!");
});
promise.then(value => console.log(value));
```
`OUTPUT: Success!`
<hr/>


#### Question 3
```javascript
Promise.reject('Error occurred').catch(err => console.log(err));
```
`OUTPUT: Error occurred`
<hr/>


#### Question 4
```javascript
let promise = Promise.resolve(1);
promise.then(value => value + 2).then(value => console.log(value));
```
`OUTPUT: 3`
<hr/>


#### Question 5
```javascript
Promise.resolve("Resolved").then(console.log);
Promise.reject("Rejected").catch(console.log);
```
`OUTPUT: Resolved, Rejected`
<hr/>


## Hard: Predict the output:

#### Question 6
```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolved!"), 1000);
});
promise.then(value => console.log(value));
console.log("After promise");
```
`OUTPUT: After promise, Resolved!`
<hr/>


#### Question 7
```javascript
Promise.resolve(2)
  .then(value => value * 2)
  .then(value => Promise.resolve(value * 2))
  .then(value => console.log(value));
```
`OUTPUT: 8`
<hr/>


#### Question 8
```javascript
Promise.reject('Initial Error')
  .catch(err => { throw new Error('New Error'); })
  .catch(err => console.log(err.message));
```
`OUTPUT: New Error`
<hr/>


#### Question 9
```javascript
async function asyncFunction() {
  return 4;
}
asyncFunction().then(console.log);
```
`OUTPUT: 4`
<hr/>


#### Question 10
```javascript
let promise = Promise.resolve(Promise.resolve('Resolve'));
promise.then(res => console.log(res));
```
`OUTPUT: Resolve`
<hr/>


## Super Hard: Pridict the output:

#### Question 11
```javascript
let promise1 = Promise.resolve('First');
let promise2 = Promise.resolve('Second');
Promise.race([promise1, promise2]).then(value => console.log(value));
```
`OUTPUT: First`
<hr/>


#### Question 12
```javascript
let promise = new Promise((resolve, reject) => {
  throw new Error('Error thrown');
});
promise.catch(error => console.log(error.message));
```
`OUTPUT: Error thrown`
<hr/>


#### Question 13
```javascript
async function asyncFunc() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
  });
  let result = await promise;
  console.log(result);
}
asyncFunc();
console.log("After async function");
```
`OUTPUT: After async function, Done!`
<hr/>


#### Question 14
```javascript
Promise.all([
  Promise.resolve('Promise 1'),
  Promise.reject('Promise 2'),
  Promise.resolve('Promise 3')
]).then(console.log).catch(console.log);
```
`OUTPUT: Promise 2`
<hr/>


#### Question 15
```javascript
let promise = new Promise((resolve, reject) => {
  resolve('Promise resolved');
  reject('Promise rejected');
});
promise.then(console.log).catch(console.log);
```
`OUTPUT: Promise resolved`
<hr/>