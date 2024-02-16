## Easy: Basic Promise Usage
- Objective: Understand how to create and use a Promise.
- Task: Write a JavaScript function named makeTea that simulates the action of making tea. This
function should return a Promise that:
1. Resolves after a delay of 2 seconds, simulating the time it takes to make tea.
2. Resolves with the string "Tea is ready!" .
- Criteria for Success:
1. Use the new Promise syntax.
2. Use setTimeout to simulate the delay.
3. Ensure the Promise resolves with the correct string.

## Medium: Chaining Promises
- Objective: Learn how to chain Promises using .then() and handle errors with .catch() .
- Task: Write a JavaScript function named prepareBreakfast that simulates preparing a breakfast
consisting of tea and toast. This function should:
1. Call the makeTea function from the Easy task and wait for it to complete.
2. Then, simulate making toast, which takes 3 seconds, and resolves with the string "Toast is
ready!" .
3. Chain these actions so that they happen sequentially, not concurrently.
4. Catch any errors and log them to the console.
- Criteria for Success:
1. Use .then() for chaining.
2. Use setTimeout to simulate the toast preparation.
3. Ensure the proper sequence of breakfast preparation.
4. Use .catch() to handle errors.

## Hard: Using Promise.all and Async/Await
- Objective: Understand how to handle multiple Promises concurrently and use async/await syntax
for cleaner code.
- Task: Write a JavaScript function named prepareFullBreakfast that simulates preparing a full
breakfast of eggs, toast, and tea concurrently. This function should:
1. Have three separate functions that return Promises for making eggs ( makeEggs ), making
toast ( makeToast ), and making tea ( makeTea ). Each function should resolve after a random
delay between 1 to 5 seconds, simulating the unpredictable nature of cooking times.
2. Use Promise.all to wait for all three components of the breakfast to be ready.
3. After all components are ready, log "Full breakfast is ready!" to the console.
4. Use async/await syntax for cleaner code and error handling.
- Criteria for Success:
1. Properly implement makeEggs , makeToast , and reuse makeTea with random delays.
2. Use Promise.all to handle concurrent Promise execution.
3. Use async/await syntax for handling asynchronous code.
4. Catch and log any errors.

## Intermediate-Hard: Custom Promise Control Flow
- Objective: Understand how to control the flow of asynchronous operations using Promises.
- Task: Write a JavaScript function named processData that simulates fetching data from an API
and then processing it. This function should:
1. Simulate fetching data with a function fetchData that returns a Promise, which resolves
with an array of numbers after a 2-second delay.
2. Write a function analyzeData that takes an array of numbers and returns a new Promise.
This Promise should resolve with an object containing the sum and average of the numbers,
but only if all numbers are positive. If any number is negative, the Promise should reject with
an error message.
3. Use the fetchData function to get data, then process it with analyzeData , handling both
success and failure cases properly.
- Criteria for Success:
1. Implement fetchData with a simulated delay using setTimeout .
2. Correctly implement analyzeData to calculate sum and average, and handle negative
numbers as described.
3. Handle the resolved value and any potential errors properly.

## Advanced: Sequential vs. Concurrent Execution
- Objective: Compare sequential and concurrent execution patterns in handling Promises.
- Task: Given an array of URLs (simulated as functions that return Promises), write two functions:
1. fetchSequentially(urls) : This function should fetch data from the URLs one after the
other, waiting for each fetch to complete before starting the next. Measure and log the total
time taken to complete all fetches.
2. fetchConcurrently(urls) : This function should initiate all fetches at once and wait for all
of them to complete. Measure and log the total time taken to complete all fetches.
Note: For both functions, simulate the fetch operation with a function that returns a Promise resolving after a random delay (1 to 3 seconds).
- Criteria for Success:
1. Implement both fetching strategies correctly.
2. Use console.time and console.timeEnd to measure execution time.
3. Understand and explain why the times differ between the two approaches.

## Expert: Implementing a Promise Queue
- Objective: Implement a queue system for handling Promises sequentially in a controlled manner.
- Task: Write a class PromiseQueue that manages the execution of Promises sequentially. The class
should:
1. Have a method add(promiseFunction) for adding new promises to the queue. Each
promiseFunction is a function that, when called, returns a Promise.
2. Ensure that added Promises are executed one after the other, even if they are added at
different times. A new Promise should only start executing once the previous Promise has
resolved.
3. Optionally, implement a way to handle and log errors from any Promise without stopping the
queue.
- Criteria for Success:
1. Ensure that Promises are executed in the order they are added.
2. Successfully log or handle errors from the Promises.
3. Demonstrate the functionality with a series of Promises that resolve after varying delays.

## Hard: Handling Partial Failures with Promise.allSettled
- Objective: Understand how to manage multiple promises when some may fail, using Promise.allSettled .
- Task: Write a function named fetchMultipleResources that accepts an array of URLs (simulated
as asynchronous functions that return Promises). This function should:
1. Attempt to fetch data from all given URLs concurrently, acknowledging that some may fail.
2. Use Promise.allSettled to wait for all operations to complete, regardless of whether they
succeed or fail.
3. Filter the results to separate the successfully fetched data from the errors.
4. Return an object with two properties: successes containing all successful fetch results, and
errors listing the reasons for any failures.
- Criteria for Success:
1. Implement the use of Promise.allSettled correctly to handle all given promises.
2. Correctly process and separate successful results from failures.
3. Demonstrate the functionality with a mix of promises that resolve and reject.

## Expert: Dynamic Promise Retry Mechanism
- Objective: Implement a retry mechanism for Promises that handles failure by retrying a specified number of times before giving up.
- Task: Create a function named retryPromise that:
1. Accepts a function that returns a Promise, a maximum number of retries, and a delay
between retries.
2. Attempts to execute the given Promise. If the Promise fails (rejects), it retries the operation
after the specified delay, up to the maximum number of retries.
3. If all attempts fail, the function should finally reject with the last error encountered.
4. If any attempt succeeds, resolve immediately with the successful result.
- Criteria for Success:
1. Correct implementation of retry logic with delay handling between attempts.
2. Proper error handling, ensuring the last error is propagated if all retries fail.
3. Validation through testing with a promise that randomly fails or succeeds, demonstrating the
retry mechanism.
## Advanced: Coordinated Parallel Tasks with Dependency Resolution
- Objective: Execute multiple asynchronous tasks in parallel, some of which depend on the
completion of others, using Promise.all and careful orchestration.
- Task: Imagine a scenario where you have four tasks (A, B, C, D), with B depending on A, and D
depending on both B and C. Write a function executeTasks that:
1. Executes tasks A, B, C, and D, respecting their dependencies. Tasks without dependencies (A,
C) should start immediately, B should wait for A, and D should wait for both B and C.
2. Each task is simulated by a function that returns a Promise, resolving after a random delay.
3. Utilize Promise.all or other appropriate promise methods to manage the dependencies and
execution order efficiently.
4. Log the result of each task upon completion, ensuring the correct execution order is
maintained.
- Criteria for Success:
1. Efficient use of Promises to manage and synchronize tasks with dependencies.
2. Correct execution order that respects the given dependencies.
3. Demonstrated handling of asynchronous task completion with appropriate logging.

