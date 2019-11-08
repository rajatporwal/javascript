function p(v) {
  console.log(v);
}

let obj = { 0: '23', 1: 'geeksforgeeks', 2: 'true' };

// Object.values method return only values of the object
Object.values(obj);       // ["23","geeksforgeeks","true"]

// Object.keys method return only keys of the object
Object.keys(obj);         // ["0","1","2"]

// If we use Object.keys in array then it will return index of the elemnets

var check = ['x', 'y', 'z']; 
Object.keys(check);       // ["0", "1", "2"]

// Object.entries method return both key and value of the object
Object.entries(obj);

// Object.is() is used for comparison of two strings, two numbers, 
// polarity of two numbers and two objects.

let checkObj1 = { a: 100 };
let checkObj2 = Object.assign(checkObj1);
let checkObj3 = Object.assign({}, checkObj1);
  
Object.is(checkObj1, checkObj2);    // true     because 1 and 2 are pointing on the same instance
Object.is(checkObj1, checkObj3);    // false    it will create new object

Object.is(0,-0);    // false
0 == -0;           // true    this is polarity check for 0
0 === -0;           // true

// Object.assign is used for cloning object

let a1 = { a: 10 };      
let a = Object.assign({}, a1);      // a1 is copied to the a.

let b1 = { a: 10 };
let b2 = { b: 20 };
let b3 = { c: 30 };
let b = Object.assign(b1, b2, b3);       // b1, b2, b3 are copied b.

let c1 = { a: 10, b: 10, c: 10 };
let c2 = { b: 20, c: 20 };
let c3 = { c: 31 };
let c = Object.assign({}, c1, c2, c3);    // c1, c2, c3 are copied to the c and the target object gets the overwritten values.


// freeze() is used to make the object immutable.
const obj1 = {'a': 1};
obj1['b'] = 2;
p(obj1);   //  { a:1, b:2 }

Object.freeze(obj1);

// after freezing object we can not add or update keys.
obj1['c'] = 3;     //  { a:1, b:2 } we will get same output.

Object.isFrozen(obj1);   // true

// seal(): we can only update the existing keys.
const obj2 = {'x': 1};
obj2['y'] = 2;
p(obj2);   //  { x:1, y:2 }

Object.seal(obj1);

obj2['y'] = 3;     //  { a:1, b:2 } we will get same output.
p(obj2);   //  { x:1, y:3 }

Object.isSealed(obj1);   // true


