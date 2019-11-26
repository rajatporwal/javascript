/* **************************************************************************************  */

let profile = {
  name: 'rajat',
  getName: () => {
    console.log(this.name);    // print undefined or empty string, as arrow function has not have its own this
    console.log(profile.name);    // print rajat
  },
  getNameAlter: (alt) => {
    console.log(alt.name);    // passing profile as an argument
  }
};

profile.getName();                  // rajat
profile.getNameAlter(profile);      // rajat

/* **************************************************************************************  */

// max count 

const arr = [1, 2, 3, 4, 4, 3];

var max = Math.max(...arr)

arr.filter( ele => ele === max);     // 2


/* **************************************************************************************  */

// num to hex

var a = 200;

console.log(a.toString(2))        // 11001000
console.log(a.toString(10))       // 200
console.log(a.toString(16))       // c8
