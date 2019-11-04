function p(v) {
  console.log(v);
}

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