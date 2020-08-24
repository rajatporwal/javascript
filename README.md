# Javascript

 - JavaScript Foundation
    * [Execution Context](#execution-context)
    * [Lexical Environment](#lexical-environment)
    * [Hoisting](#hoisting)
    * [Functions](#functions)
    * [arguments](#arguments)
    * [Scope Chain](#scope-chain)
    * [use strict](#use-strict)
    * [Function Scope vs Block Scope](#function-scope-vs-block-scope)
    * [IIFE](#iife)
    * [this](#this) \* [Arrow function vs Regular Function](#arrow-function-vs-regular-function)

## Javascript Foundation

### Execution Context

When the **JavaScript** engine first encounters your script, it creates a global **execution context** and pushes it to the current **execution stack**. Whenever the engine finds a function invocation, it creates a new **execution context** for that function and pushes it to the top of the **stack**.

- Global Execution Context has Global Object and this in the scope.
- Global object in browser is **window** and in node is **global**
- An empty javascript file also has the GEC.

<details>
<summary>Example</summary>

```javascript
// An empty JS file
console.log(this); // prints Window object
console.log(window); // prints Window object
console.log(this === window); // true (at least for now, as we not added anything)
```

 </details>

### Lexical Environment

Every time the **JavaScript** engine creates an execution context to execute the function or global code, it also creates a new **lexical environment** to store the variable defined in that function during the execution of that function. A **lexical environment** is a data structure that holds identifier-variable mapping.

<details>
<summary>Example</summary>

```javascript

	function  findMyName() {
	  function  nestedFunction() {
		return  'I am nested function';
	  };
	};

	function  sayMyName() {
		findMyName();
	};

	sayMyName();

	console.log(window.sayMyName);  		// prints function defination
	console.log(window.findMyName);  		// prints function defination
	console.log(window.nestedFunction);  	// undefined

Note: Only function or variable which are defined at parent level have gloabl lexical scope.
```

 </details>

### Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
Hoisting happens on every execution context.

- variables are partially hoisted
- functions are fully hoisted
- only keywords starting with var and function gets hoisted
- let and const works as normal variable and they do not get hoisted
- Whenever you don't want to get your variable hoisted, use const instead of var

<details>
<summary>Example</summary>

```javascript
// Initial code

console.log(a); // undefined
console.log(myName()); // Rajat

var a = "hello";
function myName() {
  return "Rajat";
}

console.log(a); // hello
console.log(myName()); // rajat
console.log(b); // throw an exception - Uncaught ReferenceError: b is not defined

// Code that gets compiled internally after hoisting

var a = undefined; // undefined will get assign to 'a' initially, as variables are hoisted partially
function myName() {
  // whole function will get hoisted, as functions are fully hoisted
  return "Rajat";
}

console.log(a);
console.log(myName());

a = "hello";
console.log(a);
console.log(myName());
console.log(b);
```

 </details>
 
<details>
<summary>Function Hoisting with same name</summary>

```javascript

	a();				// Output: Bye

	function a() {
	  return 'Hi';
	};

	a();				// Output: Bye

	function b() {
	  return 'Bye';
	};

	a();				// Output: Bye

Note: When there are two functions with same name gets hoisted, it overrides the previously alloted memory with the new function.
```

 </details>

### Functions

A **JavaScript function** is a block of code designed to perform a particular task. A **JavaScript function** is executed when "something" invokes it (calls it).

- Function Declaration gets hoisted
- Function Expression are not hoisted

<details>
<summary>Example</summary>

```javascript
// Function Expression
var canada = function () {
  return "cold";
};

// Function Declaration
function india() {
  return "warm";
}

// Function Invocation/Call/Execution
canada(); // it will get memory at runtime
india(); // it will get memory at parse/compile time
```

 </details>

### arguments

The **arguments** object is a local variable available within all non-arrow functions. You can refer to a function's **arguments** inside that function by using its **arguments** object. It has entries for each **argument** the function was called with, with the first entry's index at 0 .

- arguments are not available for global scope (GEC), it gets created with every execution context

<details>
<summary>Example</summary>

```javascript
function world(a, b) {
  console.log(arguments); // { 0: "hello", 1: "world" }
}

console.log(arguments); // undefined, as it has not created for GEC.
world("hello", "world");
```

 </details>

### Scope Chain

<details>
<summary>Example</summary>

```javascript
function sayMyName(a) {
  console.log(a);
  return function findMyName(b) {
    console.log(b);
    return function printName(c) {
      console.log(c);
      return "Rajat Porwal";
    };
  };
}

sayMyName(1); // 1, [function findMyName]
sayMyName(1)(2); // 1, 2, [function printName]
sayMyName(1)(2)(3); // 1, 2, 3, [function findMyName]
```

</details>

### use strict

The "**use strict**" directive was new in ECMAScript version 5. It is not a statement, but a literal expression, ignored by earlier versions of **JavaScript**. The purpose of "**use strict**" is to indicate that the code should be executed in "**strict** mode". With **strict** mode, you can not, for example, **use** undeclared variables.

<details>
<summary>without use strict</summary>

```javascript

	function weird() {
		height = 50;
		return height;
	}

	weird();  // output: 50

Note: Undeclared vairables are added to global scope.
```

</details>

<details>
<summary>using use strict</summary>

```javascript
"use strict";

function weird() {
  height = 50;
  return height;
}

weird(); // Reference error: height is not defined
```

</details>

### Function Scope vs Block Scope

- Variables are by default functionally scoped in JS.
- Variables declared with the var keyword cannot **have Block Scope**. Variables declared inside a **block** {} **can** be accessed from outside the **block**.
- Const and let are block scoped.

<details>
<summary>Example</summary>

```javascript
function weird() {
  if (true) {
    var a = 1;
    const b = 1;
    let c = 1;
  }
  console.log(a); // output: 1, as variables declared with var keyword are functionally scoped.
  console.log(b); // output: Reference error, b is not defined, as variables declared with const and let keyword are blocked scope.
  console.log(c); // output: Reference error, c is not defined.
}
```

</details>

### IIFE

An Immediately-invoked Function Expression is a way to execute functions immediately, as soon as they are created. IIFEs are very useful because they don't pollute the global object, and they are a simple way to isolate variables declarations.

- IIFe has its own execution context. It do not pollutes GEC.
<details>
<summary>Example</summary>

```javascript

	(function (a, b) {
	  console.log(a);			// output: 1
	  console.log(b);			// output: 2
    }(1, 2));

    Note: IIFE are self invoked function, there is no need to call them.

```

</details>

### this

The **JavaScript** this keyword refers to the object it belongs to. In a function, this refers to the global object. In a function, in strict mode, this is undefined . In an event, this refers to the element that received the event.

<details>
<summary>this without use strict</summary>

```javascript
(function () {
  console.log(this); // Window object
  console.log(window); // Window object
  console.log(this === window); // true
})();
```

</details>

<details>
<summary>this with use strict</summary>

```javascript

	(function () {
	 'use strict'
	  console.log(this);					// undefined
	  console.log(window);					// Window object
	  console.log(this === window);			// false
    }());

    Note: In a function, in strict mode, this is undefined.
```

</details>

<details>
<summary>use of this in object</summary>

```javascript

  const obj = {
    name: 'Billy',
    sing() {
	  return 'lalalala' + this.name;		 // because this can access the properties of current object.
    }
  }

Note: this is the object as the function is property of.
```

</details>

### Arrow function vs Regular Function

todo
