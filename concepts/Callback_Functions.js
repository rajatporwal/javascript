
// Callback functions are also known as Higher Order Functions.

let add = (a, b) => {
    return a + b;
  }
  
  let multiply = (a, b) => {
    return a * b;
  }
  
  let calc = (num1, num2, callback) => {
    if(typeof callback === 'function')
    return callback(num1, num2);
  }
  
  calc(1, 2, add);    // 3
  
  // we can also pass anonymous function and run it in our way.
  calc(1, 3, (a, b) => {return a - b});       // -2
  