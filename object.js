function p(v) {
  console.log(v);
}

// Object.values method return only values of the object

let obj = { 0: '23', 1: 'geeksforgeeks', 2: 'true' };

Object.values(obj);  // ["23","geeksforgeeks","true"]

// Object.keys method return only keys of the object

Object.keys(obj); // ["0","1","2"]

// If we use Object.keys in array then it will return index of the elemnets

console.log("Object.keys in array");
var check = ['x', 'y', 'z']; 
console.log(Object.keys(check)); 

// Object.entries method return both key and value of the object

p("Object.entries");
p(Object.entries(obj));

// Object.is() is used for comparison of two strings, two numbers, 
// polarity of two numbers and two objects.

let checkObj1 = { a: 100 };
let checkObj2 = Object.assign(checkObj1);
let checkObj3 = Object.assign({}, checkObj1);
  
p(Object.is(checkObj1, checkObj2)); // true     because 1 and 2 are pointing on the same instance
p(Object.is(checkObj1, checkObj3)); // false    it will create new object

p(Object.is(0,-0));    // false
p(0 == -0);           // true    this is polarity check for 0
p(0 === -0);           // true

// Object.assign is used for cloning object

p("Object.assign");

p("a1 is copied to the a.")
let a1 = { a: 10 };
let a = Object.assign({}, a1);
// p(a);

p("b1, b2, b3 are copied b.");

let b1 = { a: 10 };
let b2 = { b: 20 };
let b3 = { c: 30 };
let b = Object.assign(b1, b2, b3);
// p(b);

p("c1, c2, c3 are copied to the c and the target object gets the overwritten values.")

let c1 = { a: 10, b: 10, c: 10 };
let c2 = { b: 20, c: 20 };
let c3 = { c: 31 };
let c = Object.assign({}, c1, c2, c3);
// p(c); 


// freeze 
const obj1 = {'a': 1};

Object.freeze(obj1);  // if we freeze the object then we will not be able to add more property

Object.isFrozen(obj1);   // true

obj1['y'] = 2;      // will not add in object

p(obj1);



