// Count length of strictly increasing sub arrays.

// Count of sub arrays of length n: n(n-1)/2

const increasingSubArrays = (arr, n) => {
    let count = 0;
    let len =1;
    for (let i = 0; i < n-1; i++) {
        if(arr[i+1] > arr[i])
            len++;
        else {
            count += len * (len-1) / 2;
            len=1;
        }
    }
    
    if(len > 1) {
        count += len * (len-1) / 2;
    }
    return count;
}

const result = increasingSubArrays([1, 2, 3, 4], 4);
console.log(result);