// Mixins are these pieces of code that you can mix with other objects to extend their functionality. 
// Basically, you can borrow features from different mixins to compose the kind of object you desire.

// Composing Object using Mixins
const jsSkill = {
    knowsJS() {
      return true;
    }
};
  
  const degree = {
    hasDegree() {
      return true;
    }
};
  
  const backendSkill = {
    knowsBackend() {
      return true;
    }
};
  
// Compose Objects
  const jsProgrammer = Object.assign({}, jsSkill);
  const jsEngineer = Object.assign({}, jsSkill, degree);
  const fullStackEngineer = Object.assign({}, jsSkill, backendSkill, degree);
  
  jsEngineer.knowsJS();             // true
  jsEngineer.knowsBackend();        // error: Uncaught TypeError: jsEngineer.knowsBackend is not a function
  jsEngineer.hasDegree();           // true

//  Function Mixins

// Using a factory function with closures you can build function mixins. 

// Each mixin would take an Object as a parameter and returns a new object that would take
// passed object and extend it with mixin’s functionality.

// fly factory function
const flyFactory = function(obj) {
    // inner variable
    let isFlying = false;
  
    // returns a new object
    return Object.assign({}, obj, {
      fly() {
        isFlying = true;
        return this;
      }, isFlying() {
        return `${this.name} is ${(isFlying ? '' : 'not')} flying`;
      }
    });
  };
  
  // human factory function
  const humanFactory = function(obj) {
    let isCrying = false;
  
    return Object.assign({}, obj, {
      cry() {
        isCrying = true;
        return this;
      }, isCrying() {
        return `${this.name} is ${(isCrying ? '' : 'not')} crying`;
      }
    });
  };
  
  
  const clarkKent = {
    name: 'clark kent'
  };
  
  // compose an object
  const superman = humanFactory(flyFactory(clarkKent));
  
  // set the state
  superman.fly().cry();
  
  console.log(superman.isFlying()); // prints: clark kent is  flying
  console.log(superman.isCrying()); // prints: clark kent is  crying

// Inheritance vs Composition

    // By using mixins, you can compose objects with a desired functionality. 
    // This is very different from using inheritance, which is much rigid and doesn’t work most of the time 
    // when you want to create dynamic ever-changing models. 
    // For example, you want to build a class called javaScriptEngineer, where javaScript means you can code in 
    // JavaScript and related technologies and Engineer means you have some sort of Engineering degree. 
    // Instead of using inheritance, where you would create an engineer class and extend it to make a JS eng,
    //  you can separate out both the functionalities into a separate mixins. You can compose javaScriptEngineer
    //  by using the Object.assign() method where you can borrow methods from two different mixins.