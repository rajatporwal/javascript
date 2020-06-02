
// call, bind and apply 

var obj = {num: 2};

var addToThis = function(a, b, c) {
    return this.num + a + b + c;
};

addToThis.call(obj, 1, 2, 3);               // 8
addToThis.apply(obj, [1, 2, 3]);            // 8
var bound = addToThis.bind(obj);            
bound(1, 2, 3);                             // 8