'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null; 
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if(this.top !== null){
      let temp = this.top;
      this.top = temp.next;
      temp.next = null;
      return temp.value;
    }else {
      return 'this is empty';
    }
  }
  peek() {
    if(this.top !== null){
      return this.top.value;
    }else {
      return 'this is empty';
    }
  }
  isEmpty() {
    if(this.top !== null){
      return false, 'this is not empty';
    }else {
      return true, 'this is empty';
    }
  }
}



module.exports = Stack, Node;
