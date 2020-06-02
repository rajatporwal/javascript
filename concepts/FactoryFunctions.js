// When you use regular functions to build objects, they are called factory functions. 

// Factory functions are functions that produces objects. 
// In JavaScript, there are two ways to create objects, one by using either function constructors or classes. 
// In either case, you have to use a new keyword. And secondly, by using regular functions. 


// Factory Function
    let Car = function(color) {
        return Object.assign({}, {
        color: color
        });
    };
  
    // New Object using factory function
    let redCar = Car('red');

// Constructor
    let Bike = function(color) {
        this.color = color;
    }

    // New object using constructor
    let redBike = new Bike("red");

