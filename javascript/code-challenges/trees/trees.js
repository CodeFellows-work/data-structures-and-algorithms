'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  postOrder() {
    const walk = (node)=> {
      // look at the left
      if(node.left) walk(node.left);
      // before we get to walk on right side, the above function call should finish
      // look at the right
      if (node.right) walk(node.right);
      // process the value
      console.log(node.value);
    };
    walk(this.root);
  }
  inOrder() {
    const walk = (node)=> {
      // look at the left
      if(node.left) walk(node.left);
      // process the value
      console.log(node.value);
      // look at the right
      if (node.right) walk(node.right);
    };
    walk(this.root);
  }
  preOrder() {
    const walk = (node)=> {
      // process the value
      console.log(node.value);
      // look at the left
      if(node.left) walk(node.left);
      // lookat the right
      if (node.right) walk(node.right);
    };
    walk(this.root);
  }
  fizzBuzz() {
    const newArray = [];
    const walk = (node) => {
      newArray.push(node.value);

      if(node.left && node.left.value % 3 === 0){
        node.value = 'fizz';
        walk(node.left);
      } else if(node.left && node.left.value % 5 === 0) {
        node.value = 'buzz';
        walk(node.left);
      } else if(node.value % 3 === 0 && node.value % 5 === 0) {
        node.value = 'fizzbuzz';
        walk(node.left);
      }else{
        walk(node.left);
      }
      if(node.right){
        walk(node.right);
        if(node.value % 3 === 0) {node.value = 'fizz';}
        else if(node.value % 5 == 0) {node.value = 'buzz';}
        if(node.value % 3=== 0 && node.value % 5 === 0) {node.value = 'fizzbuzz';}
      }
    };
    walk(this.root);
    return newArray;
  }
}
class BinarySearch {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    let current;
    const walk = (node) => {
      current = node;
      if(node.left){
        walk(node.left);
      }
      if(node.right){
        walk(node.right);
      }
    };
    walk(this.root);
    if(current.left === null){
      current.left = newNode;
    }else if(current.right === null){
      current.right = newNode;
    }
  }
  contains(value){
    if(this.root === value) return true; 

    const walk = (node) => {
      if(node.left && node.left === value){
        return true;
      }else {
        walk(node.left);
      }
      if(node.right && node.right === value){
        return true;
      }else{
        walk(node.right);
      }
    };
  }
  findMax(){
    if(this.root === null){
      return 'empty tree';
    }
    let currentNode = this.root;

    while(currentNode.right !== null){
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
}
class BreadthFirstSearch {
  constructor() {
    this.root = null;
  }

  breadthFirst(tree) {
    if(tree === null){
      console.log('empty tree');
    }

    let newArray = [tree];
    let newArrayTwo = [];

    console.log(newArray);

    while(newArray.length > 0){
      let node = newArray.shift();
      let value = node.value;
      newArray.push(value);


      if(node.left === null && node.right === null){
        continue;
      }
      if(node.left !== null){
        newArray.push(node.left);
      }
      if(node.right !== null){
        newArray.push(node.right);
      }
    }
    return newArrayTwo;
  }
}


module.exports = {BreadthFirstSearch, BinaryTree, BinarySearch, Node};
