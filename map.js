function p(v) {
  console.log(v);
}

var map = new Map(); 

map.set("a", "A");
map.set("b", "B");
map.set("d", "D");

p(map.size);          // 3

p(map.has("a"));      // true
p(map.has("c"));     // false     // return false if key is not found

p(map.get("a"));     // A
p(map.get("c"));     // undefined   // return undefined if key is not found

p(map.delete("d"));   // true
p(map.delete("c"));   // false     // return false if key is not found

// p(map.clear());       // undefined  // returns undefined is it clears map succesfully

let mapIteratorEnteries = map.entries();   // return key and values both in array form 
for(let ele of mapIteratorEnteries) {       
  p(ele);                                   // ex. ["a", "A"]
}

let mapIteratorKeys = map.keys();         // return only keys
for(let ele of mapIteratorKeys) {
  p(ele); 
}

let mapIteratorValues = map.values();         // return only values
for(let ele of mapIteratorValues) {
  p(ele); 
}

// we can directly render using forEach while enteries(), keys() and values()
// returns iterator object.

map.forEach( (ele) => {           // return values
  p((ele));           
})

