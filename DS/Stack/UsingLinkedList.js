class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}
  
class Stack {

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    printStack() {
        let arr = [];
        let currnetNode = this.top;

        while(currnetNode !== null) {
            arr.push(currnetNode.value);
            currnetNode = currnetNode.next;
        }
        console.log(arr);
    }

    peek() {
        if(this.length === 0)
            return "Stack Underflow";

        return this.top;
    }

    push(value){
        const newNode = new Node(value);

        if (this.length === 0) {

          this.top = newNode;
          this.bottom = newNode;

        } else {

          const holdingPointer = this.top;
          this.top = newNode;
          this.top.next = holdingPointer;
          
        }

        this.length++;
        return this;
      }

    pop() {

        if (!this.top) {
            return null;
        }

        if(this.length === 1) {
            this.bottom = null;
        }

        this.top = this.top.next;       // removing unwanted node and setting top pointing to the next node.
        this.length--;
        return this;
    }

}
  
    const myStack = new Stack();
    myStack.push(1);
    myStack.push(12);
    myStack.push(2);
    myStack.push(5);
    myStack.pop();
    console.log(myStack)
    myStack.printStack();