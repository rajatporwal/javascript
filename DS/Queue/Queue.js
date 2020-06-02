// Implementing queue with array is not recommended.

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {

    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }

    printList() {
        let arr = [];
        let currnetNode = this.first;

        while(currnetNode !== null) {
            arr.push(currnetNode.value);
            currnetNode = currnetNode.next;
        }
        console.log(arr);
    }


    peek() {
        return this.first;
    }

    enqueue(value){
        const newNode = new Node(value);

        if (this.length === 0) {
          this.first = newNode;
          this.last = newNode;
        } else {
          this.last.next = newNode;
          this.last = newNode;
        }

        this.length++;
        return this;
      }

    dequeue() {
        
        if (!this.first) {
            return null;
        }

        if(this.length === 1) {
            this.last = null;
        } 

        this.first = this.first.next;
        this.length--;
        return this;
    }

  }
  
  const myQueue = new Queue();
  myQueue.enqueue(10)
  myQueue.enqueue(1)
  myQueue.enqueue(1)
  console.log(myQueue.peek())
  myQueue.printList();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.printList();
  
  console.log(myQueue)
  
  