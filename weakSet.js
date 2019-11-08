function p(v) {
  console.log(v);
}

// WeakSet is a collection of objects and not values of some particular type.
// only 3 methods add, has, delete
let weakSet = new WeakSet();

let obj1 = { "a" : 1};

weakSet.add(obj1);

weakSet.has(obj1);       // true

// weakSet.get(obj1);    // no method like get

weakSet.delete(obj1);    // true

// we cannot iteratre over weakSets