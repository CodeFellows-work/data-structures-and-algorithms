'use strict'

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
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
  peek(){
    let peekingFront = this.front;
    let peekingRear = this.rear;
    if(peekingFront !== null || peekingRear !== null){
      return peekingFront.value;
    }else{
      return 'this is empty';
    }
  }
  isEmpty(){
    if(this.front !== null){
      return false, 'this is not empty';
    }else {
      return true, 'this is empty';
    }
  }
}

module.exports= Queue, Node;
