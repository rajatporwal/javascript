// Leades in an Array

// An element is a leader if it is greater than all the elements to its right side.
// And the right most elements is always a leader.

// Ex: [16, 17, 4, 3, 5, 2] - output: [17, 5, 2]

// 1. Simple Soultion

const leaders_simple = arr => {
    let result = [];
    arr.forEach( (e, i) => {
        let j = i + 1;
        for(j; j< arr.length; j++) {
            if(e < arr[j]) {
                return;
            }
        }
        if(j === arr.length) {
            result.push(e);
        }
    });
    return result;
}

// Better Solution

const leaders = arr => {
    let max = arr[arr.length - 1];
    let result = [max];
    for(let i = arr.length -2; i >= 0; i--) {
        if(arr[i] > max) {
            result.push(arr[i]);
            max = arr[i];
        }
    }
    return result.reverse();
}

const result = leaders([16, 17, 4, 3, 5, 2]);

console.log(result);

// Traverse the array from rigth to left
// Keep the track of maximum and compare itfrom each element