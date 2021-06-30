'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class PseudoQueue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    let newNode = new Node(value);

    if(!this.rear) {
      this.rear = newNode;
      this.front = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }


  dequeue() {
    let temp = this.front;
    if (this.front !== null) {
      this.front = temp.next;
      temp.next = null;
      return temp.value;
    }
    if(temp.next === null){
      this.front = this.rear;
    }
  }
}


module.exports= PseudoQueue, Node;
