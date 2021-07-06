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
}


module.exports = {BinaryTree, BinarySearch, Node};
