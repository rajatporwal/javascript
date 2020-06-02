// Array allows cache locality which makes them technically faster when accesing it's item from memory
//  becase they have elements next to other.

// Also linked list have extra memory for holding next pointer.

// on the other hand LL have more dynamic memory while if memory of the array 
// reached its limit it will create create the new memory of the double size of the array.

class Stack {

    constructor(){
      this.array = [];
    }

    peek() {
      return this.array[this.array.length-1];
    }

    push(value){
      this.array.push(value);
      return this;
    }

    pop(){
      this.array.pop();
      return this;
    }

  }
  
  const myStack = new Stack();
  myStack.peek();
  myStack.push('google');
  myStack.push('udemy');
  myStack.push('discord');
  myStack.peek();
  myStack.pop();
  myStack.pop();
  myStack.pop();