// self invoked function or Immediately Invoked Function Expression IIFE 

// 1. (function() {} ())
// 2. (function() {})()
((i) => { 
    console.log(i + 1);
    return i + 1;
  })(1);

  (function(i){
    console.log(i + 1);
    return i + 1;
  })(1)

  // if we do not want to return anything from function

  // 1. !(function() {.... code here} ())
  // 2. ~(function() {.... code here} ())
  // 3. -(function() {.... code here} ())
  // 4. +(function() {.... code here} ())

  !(function(i){
    console.log(i + 1);
  })(1)
