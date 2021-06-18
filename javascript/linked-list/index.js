'use strict'; 

class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }
  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let valArr = [];
    let currentNode = this.head;
    while (currentNode) {
      valArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    let string = '';
    for (let i = 0; i < valArr.length; i++) {
      string += `{${valArr[i]}} -> `;
    }
    let statement = (string + 'NULL');
    return statement;
  }
}


// const list = new LinkedList();

// const A = new Node(10);
// const B = new Node('text');
// const C = new Node(false);

// list.head = A;
// list.head.next = B;
// list.head.next.next = C;

// console.log(JSON.stringify(list));

module.exports = LinkedList, Node;
