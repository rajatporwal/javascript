// Selection Sort sorts keeps the track of lowest element and swap it with i index.

const selection_sort = arr => {
    for(let i=0; i<arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp; 
            }
            
        }
    }
    return arr;
}

const result = selection_sort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
console.log(result);