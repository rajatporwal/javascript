
class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class LinkedList {

  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  // O(1)
  append(value) {
    const newNode = new Node(value);      
   
    this.tail.next = newNode;             // updating newNode at next of tail
    this.tail = newNode;                  // assigning newNode to tail (it will not affect head as we are changing instance)
    this.length++;
    return this;
  }

  // O(1)
  prepend(value) {
      const newNode = new Node(value);        
      newNode.next = this.head;           // setting head as next pointer of prepend newNode 
      this.head = newNode;                 // assigning newNode to head
      this.length++;
      return this;
  }
  
  printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
      console.log(array);
  }

  insert(index, value) {
    // if index is greater than length, append ele to last of the list.
    if (index >= this.length)
      return this.append(value).printList();
    
    const newNode = new Node(value);        
    let leader = this.traverseToIndex(index - 1);   
    let holdingPointer = leader.next;               // copy of next which is used to replace in next steps.
    leader.next = newNode;                          // replacing next with value of new node and adding null to next.
    newNode.next = holdingPointer;                  // finally adding newNode with all the childs
    this.length++;

    return this.printList();
  }

  remove(index) {

    if(index >= this.length)
      return this.printList()
    
    const leader = this.traverseToIndex(index - 1);   
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }


  // returns current node with req index, we need to replace next of this node with new node
  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;

    // traversing using next while current is not equal to index
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    // returning currentNode as we want to keep the track of rest of the list
    return currentNode;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1)
myLinkedList.insert(7, 3)
myLinkedList.insert(7, 3)
myLinkedList.insert(1, 2)
myLinkedList.remove(1)

// myLinkedList.printList();

// console.log(myLinkedList)  


