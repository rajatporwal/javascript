// Symbol method is present on iterable objects (like array, string)

const myArray = [1, 2, 3]

let iterator = myArray[Symbol.iterator]();

iterator.next()    // { value: 1, done: false}
iterator.next()    // { value: 2, done: false}
iterator.next()    // { value: 3, done: false}
iterator.next()    // { value: undefined, done: true}

// if array reached to its limit, than it will return done: true 
// otherwise it will return value and done: false.

// Generator Function

// Unlike normal arrays generator will only take memory when it is yeild using next().

// making myArray with generators
// * before the function name indicates that the funciton is of generator type

function *generator() {
    yield 1;
    yield 2;
    yield 3;
}

iterator = generator();

iterator.next()    // { value: 1, done: false}
iterator.next()    // { value: 2, done: false}
iterator.next()    // { value: 3, done: false}
iterator.next()    // { value: undefined, done: true}

function *infiniteMaker() {
    let i=1;
    while(true) {           // this will not show stack overflow error
        yield i;            // bcs it will generate onlt single value and than get paused
        i++                 // on every call using next() it will increment i and create new value.
    }
}

iterator = infiniteMaker();

iterator.next()    // { value: 1, done: false}
iterator.next()    // { value: 2, done: false}
iterator.next()    // { value: 3, done: false}
iterator.next()    // { value: 4, done: false}
iterator.next()    // { value: 5, done: false}      this will never return true



