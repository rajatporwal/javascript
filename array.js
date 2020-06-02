// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function p(v) {
  console.log(v);
}

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]; 
p(arr);

arr.push("a", "b");   // js array can hold multiple data types.

arr.pop(); // removes last elemnet.

arr.unshift("c");    // unshift add elements at the front of an array.

arr.shift();  // shift removes elements from the front.

arr.splice(1, 3);   // remove elements from index 1 to 3.

arr.splice(1, 2, "b", "c");  // remove elements from 1-2 and add b and c from index 1.

arr.splice(3, 0, 'Pascal', "pass"); // adding elements from certain index without remvoing any.

// indexOf and lastIndexOf method will return  -1 if ele is not found

arr.indexOf(1);        // return first element's index       // 0
arr.lastIndexOf(1);    // // return last element's index     // 5

// findIndex will return index of the element
let findIndex = arr.findIndex((v)=>{
    return  v % 2 === 0;             
}); 

p(findIndex);       // 7

// find will return element itself
let find = arr.find((v)=>{
    return  v % 2 === 0;
}); 

p(find);    // 8

// sorting

// to sort for string
arr.sort();  // it will sort only Alphabetically

// to sort for integers
arr.sort( (a, b) => {return a - b});  // this will sort Numerically


// Iterating over array

// 1. for loop
// 2. while loop
// 3 forEach method

// 4. array.entries()
let iteratorEntries = arr.entries();   // used to get key and value pair for each index.
p("iterator Entries");
for( let e of iteratorEntries) { 
  if(e[0] == 2)
    p(e);
}

// 5. array.values()
let iterateValues = arr.values();   // used to values for each index.
p("iterator Values");
for( let e of iterateValues) { 
  if(e == "c")
    p(e);
}

// 6. array.map()
let mappedArray = arr.map( (ele) => ele * 2 );   // used to create new array with same ele.

// reverse
arr.reverse();

//  convert the element of the given array to string.

arr.push(new Date());

// Converts the array to a string and returns the result, each item separated by a comma.
p(arr.toString());

// Converts the array to a local array and returns the result.
// If you want to return time type data, it is recommended to use LocaleString().
p(arr.toLocaleString());

// valueOf: returns the array itself
arr.valueOf();

var date = new Date();
date.valueOf();          //1540642478175
date.toString();         //"Sat Oct 27 2018 20:14:38 GMT+0800 (China Standard Time)"
date.toLocaleString();   //"2018/10/27 8:14:38 PM"

let temp = new Array(3, 4, 6, 7, 9);

// Array.every() function checks whether all the elements of the array
// satisfy the given condition or not.

let every =  arr.every( (ele) => ele < 5);
p(every);         // false    return type is boolean.

// Array.some() function checks at least one of the elements of the array
// satisfy the given condition.

let some =  arr.some( (ele) => ele < 5);
p(some);         // true    return type is boolean.

// join(), joins every ele with the passed parameter 
var a = [1, 2, 3, 4, 5, 6];
a.join('|');    // 1|2|3|4|5|6

// slice()  returns a new array containing a portion of the array
p(a.slice(2,4));  // [3, 4]  end index is exclusive

// fill() is used to fill the array with a given static value.
a.fill(87);    // Input: [1, 2, 3, 4, 5, 6]     Output:  [87, 87, 87, 87, 87, 87]

// filter
let filter = temp.filter( (ele) => ele > 6);
p(filter);

// reduce
temp.reduce( (r, o) => {
  o.push(r);
}, [])

temp.reduce((o, a) => {
      o.push(a);
      return o;
     }, [])

// reduceRight reduces the array from right side
const strR = ['t', 's', 'e', 'b'];

const reduce = strR.reduce( (c, v) => c + v);         // tsed
const reduce1 = strR.reduceRight( (c, v) => c + v);   // best

// Array.of() method creates a new Array instance
Array.of("Ram","Geeta"); 
Array.of(2,3,4,'Sheeta'); 

  // flat method flats the deeply nested array
const matrix = [[1, 2, 3], [4, 5, 6]];
const matrix2 = [[1,2], [4, 5, [[[3]]]]]

// 1 will flat to only 1st level.
const flat = matrix.flat(1);   // [1, 2, 3,4, 5, 6]
const flat2 = matrix2.flat(1);   // [1, 2, 4, 5, [[[3]]] ]

// Infinity will flat to only all nested levels.
const flat3 = matrix2.flat(Infinity);   // [1, 2, 4, 5, 3]

// flatMap flattens and map the array at the same time
const nums = [1, 2, 3];
const strs = ['one', 'two', 'three'];

const mapped = nums.map( (val, i) => [val, strs[i]]);   // [ [1, 'one'], [2, 'two'], [3, 'three'] ]
const mapped1 = nums.flatMap( (val, i) => [val, strs[i]]);   // [ 1, 'one', 2, 'two', 3, three]

// Array.from() creates the new array from the iterable parameter passed to it.

let s = "tech";
[...s]           // ["t", "e", "c", "h"] 
Array.from(s)   // ["t", "e", "c", "h"] 

const fromScratch = Array.from({length: 3}, (v, i) => v);   // [undefined, undefined, undefined]
const fromScratch1 = Array.from({length: 3}, (v, i) => i);   // [0, 1, 2]

const fromOtherMethod = (new Array(3)).fill(0).map( (v, i) => i)   // [0, 1, 2]

p(Array.from(['a', 'b', 'c']))

// negative index with array

const arrNegative = [1, 2, 3];

arrNegative[-1] = 0;

arrNegative  // [1, 2, 3]  it will insert -1 as a key in arrNegative

// with negative indexes array behaves as same as object, i.e. they started inserting values in key-value pairs.