// Bubble Sort sorts the elements one-by-one, it makes pair of 2 and swap with greater ele.

const bubble_sort = arr => {
    for(let i=0; i<arr.length-1; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
            
        }
    }
    return arr;
}

const result = bubble_sort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
console.log(result);