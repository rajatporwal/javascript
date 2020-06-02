// Find missing number

// PS: You are given list of n-1 integers and these integers are in the range from 1-n.

const missingNumber = arr => {
    const n = arr.length;
    const total = (n + 1) * (n + 2) / 2;
    
    const sum = arr.reduce((a, v) => {
        return a + v;
    }, 0);
    
    return total - sum;

}

const result = missingNumber([1, 3, 6, 5, 2, 7, 8, 9]);

console.log(result);

// 1. Find the sum of first n numbers starting from 1.
// 2. Find the sum of all the numbers in the given array.
// 3. return the difference of both the numbers.