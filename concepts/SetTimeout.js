// The window object allows execution of code at specified time intervals.

timeoutId = setTimeout( () => {         // print setTimeout only once.
    console.log("setTimeout")
}, 3000);

intervalId = setInterval( () => {       // print setInterval unless it is not cancelled using clearInterval.
    console.log("setInterval")
}, 3000);

setTimeout( () => {
    clearTimeout(intervalId)
}, 9000);

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.

// The clearTimeout() method stops the executions of the function specified in the setInterval() method.