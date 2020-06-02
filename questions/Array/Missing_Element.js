const missingElement = (arr, limit) => {
    const temp = new Array(100);
    temp.fill(true);
    arr.forEach((e) => {
        if(e < limit) temp[e] = false;
    });
    
    for(let i=0; i<limit; i++) {
        if(temp[i]) {
            let min = i, max = i;
            while(temp[++i]) {
                max = i;
            }
            min === max ? console.log(min): console.log(`${min} - ${max}`);
        }
    }
}

missingElement([1, 4, 5, 7, 8, 6, 23, 24, 25, 34, 26], 100);
