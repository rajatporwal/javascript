function p(v) {
  console.log(v);
}

// why WeakMap.

{
  let x = {
    a: [1,2]
  };

  var map = new Map();
  var weakMap1 = new WeakMap();
  map.set(x, "something");
  weakMap1.set(x, "something");
}

p(map);         // this will have one entry as x, 
                // bcs map don't allow you to garbage collect the values 
                // even though let has block scope
                //  but still we can access x out of the block

p(weakMap1);  // here weakMap as 0 entries as x is garbage collected out og the box scope.

let weakMap = new WeakMap();

const a = {b: 1};
const b = {};
const c = {};
const e = {};

weakMap.set(a, "A");
weakMap.set(b, "B");
weakMap.set(c, "C");
//  weakMap.set("d", "D");     Uncaught TypeError: Invalid value used as weak map key
                            // bcs weakMap only accepts keys as an object.   

p(weakMap.has(a));      // true
p(weakMap.has("a"));    // false   it will check for a as an object and we are passing string
p(weakMap.has(e));      //  false

p(weakMap.get(a));      //  A

p(weakMap.delete(c));      //  true

// weakMap.clear();     //  No function like clear() weakMap()

// no way to iterate weakMap

// for(var ele in weakMap) {
//   p(ele);
// }

// weakMap.forEach( (ele) => {
//   p(ele);
// })


// Map and Set‘s references to objects are strongly held and 
// will not allow for garbage collection. This can get expensive if 
// maps/sets reference large objects that are no longer needed, 
// such as DOM elements that have already been removed from the DOM.