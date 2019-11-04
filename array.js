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

// Iterating over array

// 1. for loop
// 2. while loop
// 3 forEach method
// 4. using every method

// Array.every() function checks whether all the elements of the array
// satisfy the given condition or not.

let every =  arr.every( (ele) => ele < 5);
p(every);         // return type is boolean.

// 5. array.entries()
let iteratorEntries = arr.entries();   // used to get key and value pair for each index.
p("iterator Entries");
for( let e of iteratorEntries) { 
  if(e[0] == 2)
    p(e);
}

// 6. array.values()
let iterateValues = arr.values();   // used to values for each index.
p("iterator Values");
for( let e of iterateValues) { 
  if(e == "c")
    p(e);
}

// 7. array.map()
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

