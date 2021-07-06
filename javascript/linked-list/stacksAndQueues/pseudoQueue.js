'use strict';

const Stack = require('./stacks.js');

class PseudoQueue {

  constructor(){
    this.front = null;
    this.rear = null;
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  };
  enqueue(value) {
    this.stackOne.push(value);
    this.rear = this.stackOne.top;
  }
  dequeue() {
    while(this.stackOne.top) {
      this.stackTwo.push(this.stackOne.pop());
    }
    return this.stackTwo.pop();
  }

}

module.exports = PseudoQueue;
