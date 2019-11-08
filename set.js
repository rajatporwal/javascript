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
    ele;                                   // ex. ["a", "a"]
  }
  
  // values() and keys() are same in case of Sets
  let setIteratorKeys = set.keys();         // return values in string form
  for(let ele of setIteratorKeys) {
    ele; 
  }
  
  let setIteratorValues = set.values();         // return values in string form
  for(let ele of setIteratorValues) {
    ele; 
  }
  
  set.forEach( (ele) => {           // return values
    ele;           
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
  var unionSet = new Set(); 
  for (var elem of this) { 
    unionSet.add(elem); 
  } 
  for(var elem of otherSet) {
      unionSet.add(elem); 
  }
  return unionSet; 
}

// intersection
Set.prototype.intersection = function(otherSet) { 
    var intersectionSet = new Set(); 
    for(var elem of otherSet) { 
      if(this.has(elem)) 
        intersectionSet.add(elem); 
    } 
  return intersectionSet;                 
} 

// difference
Set.prototype.difference = function(otherSet) 
{ 
     var differenceSet = new Set(); 
    for(var elem of this) { 
        // if the value[i] is not present  
        // in otherSet add to the differenceSet 
        if(!otherSet.has(elem)) 
            differenceSet.add(elem); 
    } 
    return differenceSet; 
} 

let setA = new Set([10, 20, 30]); 
let setB = new Set([50, 60, 10, 20, 30, 40]); 
let setC = new Set([10, 30, 40, 50]); 
 
setA.subSet(setB);   // true
setA.subSet(setC);   // false

let unionSet = setB.union(setA);  // 10 20 30 50 60 40
let intersectionSet = setA.intersection(setC);  // [10, 30, 40, 50]
let differenceSet = setA.difference(setC);  // [10, 20, 30]

// convert set into array
[...new Set(setA)];   //  [10, 20, 30, 50, 60, 40]