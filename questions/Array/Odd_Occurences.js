// find the number which occurs odd no of times

// 1. Best Solution, using X-OR operator

const oddOccuerences = arr => {
    let temp = 0;
    arr.forEach(e => {
        temp = e ^ temp;
    });
    return temp;
}

// 2. Using hashing 

const oddOccuerences_hashing = arr => {
    const map = new Map();

    arr.forEach(ele => {
        if (map.get(ele)) {
            map.set(ele, map.get(ele) + 1);
        } else {
            map.set(ele, 1);
        }
    });
    let result = 0;
    for(let [key, value] of map.entries()) {
        if(value % 2 !== 0) {
            result = key;
            return result;
        }
    }
    return result;
}

const result = oddOccuerences_hashing([1, 2, 1, 3, 2, 3, 2, 2, 3, 3, 2]);

console.log(result);