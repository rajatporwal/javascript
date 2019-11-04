function p(v) {
  console.log(v);
}

var set = new Set(); 
  
  set.add("a");
  set.add("b");
  set.add("d");
  
  set.size;          // 3
  
  set.has("a");      // true
  set.has("c");     // false     // return false if key is not found
  
  set.delete("d");   // true
  set.delete("c");   // false     // return false if key is not found
  
  // p(set.clear());       // undefined  // returns undefined is it clears set succesfully
  
  let setIteratorEntries = set.entries();   // return values in the form of array
  for(let ele of setIteratorEntries) {       
    p(ele);                                   // ex. ["a", "a"]
  }
  
  // values() and keys() are same in case of Sets
  let setIteratorKeys = set.keys();         // return values in string form
  for(let ele of setIteratorKeys) {
    p(ele); 
  }
  
  let setIteratorValues = set.values();         // return values in string form
  for(let ele of setIteratorValues) {
    p(ele); 
  }
  
  set.forEach( (ele) => {           // return values
    p(ele);           
  })
  

  //  subSet

  Set.prototype.subSet = function(otherSet) {
    if (this.size > otherSet.size) {
      return false;
    } 
    else {
      for (let ele of this) {
        if(!otherSet.has(ele))
          return false;
      }
      return true;
    }
 }
    // Arrow functions do not have a prototype property. 
    // Therefore we can make prototype function using ES6

    // we can not use forEach loop here because we have to break the loop when condition meets,
    // and we cannot forEach loop in between.

// union
Set.prototype.union = function(otherSet) {
  this.forEach( ele => {
    otherSet.add(ele);
  });
  return otherSet;
}

// intersection

Set.prototype.intersectio


let setA = new Set([10, 20, 30]); 
let setB = new Set([50, 60, 10, 20, 30, 40]); 
let setC = new Set([10, 30, 40, 50]); 
 

p(setA.subSet(setB));   // true
p(setA.subSet(setC));   // false

let unionSet = setB.union(setA); 

unionSet.forEach( ele => p(ele));    // 10 20 30 50 60 40

// convert set into array

p([...new Set(setA)]);