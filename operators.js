function p(v) {
    console.log(v);
  }
  
  typeof 3.14;                         // number
  typeof NaN;                          // number
  typeof [5, 10, 15, 20];              // object
  typeof {name:'Siddharth', age:20}    // object
  typeof new Date();                   // object
  typeof null;                         // object
  typeof function () {};               // function
  typeof undefined;                    // undefined       
  typeof workout;                      // undefined       
  
  
  //    A       B       A & B       A | B       A ^ B
  
  //    0       0         0           0           0
  //    0       1         0           1           1
  //    1       0         0           1           1
  //    1       1         1           1           0
  
  
  2 ^ 2 ^ 3 ^ 5;        // 6
  2 ^ 2;                // 0     X-OR of two same no is 0.
  
  
  // == vs === 
  
  21 == 21;        // true
  21 === 21;       // true
  
  21 == '21';      // true
  21 === '21';     // false
  
  'food is love'=='food is love';         // true
  'food is love' === 'food is love';      // true
  
  true == 1;     // true
  true === 1;      // false
  
  false == 0;        // true
  false === 0;       // false
  
  null == undefined;     // true
  null === undefined;    // false
  
  // spread operator
  
  let arr1 = [1,2,3]; 
  let arr2 = [4,5]; 
  
  // normal array concat() method 
  arr1.concat(arr2);         // [ 1, 2, 3, 4, 5 ] 
  
  // using spread operator
  arr1 = [...arr1,...arr2];   // [ 1, 2, 3, 4, 5 ] 
  
  // assigning arr1 directly to arr2 has one problem 
  // if any changes made to any of the arrat than changes will reflect in both the arrays
  // bcs both array are pointing on the same instance.
  
  arr1 = ['a','b','c']; 
  arr2 = arr1; 
  
  // changed the original array   
  arr2.push('d');       // like if we push in arr2 than it will get add in 1 also
  arr1;                 // ['a','b','c']
  arr2;                 // ['a','b','c']
  
  // spread operator for copying  
  let arr3 = ['a','b','c']; 
  let arr4 = [...arr3]; 
    
  arr3;  // [ 'a', 'b', 'c' ] 
    
  arr3.push('d');     // inserting an element at the end of arr2 
    
  arr3; // [ 'a', 'b', 'c', 'd' ] 
  arr4; // [ 'a', 'b', 'c' ] 
  
  // Boolean
  
  // any value other than 0 is true.
  Boolean(-1);          // true
  Boolean('true');      // true
  Boolean('false');     // true
  Boolean("abc");       // true
  Boolean(1 < 2);       // true
  
  Boolean(0);
  Boolean("");
  Boolean(undefined);
  Boolean(-0);
  Boolean(false);
  Boolean(NaN);
  Boolean(null);
  Boolean(1 > 2); 