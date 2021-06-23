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
  append(value) {
    const appendNode = new Node(value);
    if(!this.head) {
      this.head = appendNode;
      return;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next=appendNode;
  }
  insertBefore(value, newVal) {
    let currentNode = this.head;
    let newNode = new Node(newVal, null);

    if(currentNode.value === value) {
      newNode.next = currentNode;
      this.head = newNode;
      return;
    }
    while(currentNode.next) { 
      if(currentNode.next.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        break;
      }
      currentNode = currentNode.next; 
    }
  }
  insertAfter(value, newVal) {
    let currentNode = this.head;
    let newNode = new Node(newVal, null);

    while(currentNode){
      if(currentNode.value === value){
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        break;
      }
      currentNode = currentNode.next;
    }
  }
  kthFromTheEnd(k) {
    let currentNode = this.head;
    let length = 0;

    while(currentNode) {
      length ++;
      currentNode = currentNode.next;
    }
    let kposition = length -k;
    if(length <= k || k< 0 || kposition === 0) {
      return 'notNode';
    }
    if(length > k) {
      let current = this.head;
      for(let i=1; i<kposition;i++){
        current = current.next;
      }
      return current.value;
    }
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
