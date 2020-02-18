const moveZeroesToEnd = (arr) => {
    let j = arr.length -1;
    for(let i=0; i<j; i++) {
      if(arr[i] === 0) {
          while(arr[j] === 0) j--;
          arr[i] = arr[j];
          arr[j] = 0;
      }
    }
    return arr;
}

const result = moveZeroesToEnd([0, 1, 0, 1, 4, 2, 0, 0, 7, 0, 8, 0, 9, 0, 0, 5, 0, 0, 9, 0, 0, 1, 0]);
console.log(result);