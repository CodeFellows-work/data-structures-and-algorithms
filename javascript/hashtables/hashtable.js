'use strict';




class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    // traverse to the tail and add to the end.
    let current = this.head;
    let previous = null;
    while (current) {
      previous = current;
      current = current.next;
    }
    // current is null, how do we add to the list.
    previous.next = new Node(value);
  }
}
class BinaryTree {
  constructor(bt) {
    this.root = bt.root;
  }
  postOrder() {
    let btArray = [];

    const walk = (node) => {
      if(node.left){ walk(node.left); }
      if(node.right){ walk(node.right); }
      btArray.push(node.value);
    };
    walk(this.root);
    return btArray;
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let arrayOfCharacters = key.split('');
    let sumOfAsciiValues = arrayOfCharacters.reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);

    return (sumOfAsciiValues * 599) % this.size; // 201
  }

  // Parameters: Key so we store things, and some value
  add(key, value) {
    let hash = this.hash(key);

    // check if thers a linked list at the hashed index, add an empty linked list if not
    if (!this.buckets[hash]) this.buckets[hash] = new LinkedList();

    // add our key and our value to the linked list.
    let entry = { [key]: value };
    this.buckets[hash].insert(entry);
    return entry;
  }

  // get a key, look up the value in our hash table and return.
  get(key) {
    let hash = this.hash(key);
    return this.buckets[hash] ? this.buckets[hash].head.value : null ;
  }

  // returns a boolean whether the key exists
  contains(key) {
    let hash = this.hash(key);

    return this.buckets[hash] ? true : false;
  }

  // returns the repeated word
  repeatedWord(words) {
    const hashmap = new HashTable(100);
    let word =
    {
      word: words.split(' '),
      count: 0
    };

    for(let i =0; i< word.word.length; i++){
      hashmap.add(`${i}`, word.word[i]);
      for(let j= word.word.length; j > 0; j--){
        if(hashmap.get(`${i}`)[`${i}`] === word.word[j]){
          return word.word[j];
        }
      }
    }
  }
  treeIntersection(bt1, bt2){
    const hashmap = new HashTable(100);
    let passedTree1 = new BinaryTree(bt1);
    let passedTree2 = new BinaryTree(bt2);
    let bt1Array =[];
    let bt2Array =[];
    let returnedArray=[];

    bt1Array = passedTree1.postOrder();
    bt2Array = passedTree2.postOrder();


    for(let i =0; i< bt1Array.length; i++){
      hashmap.add(`${i}`, bt1Array[i]);
      if(hashmap.get(`${i}`)[`${i}`] === bt2Array[i]){
        returnedArray.push(bt2Array[i]);
      }
    }
    return returnedArray.sort();
  }

  leftJoin(hm1, hm2){
    let valuesArray = [];

    hm1.buckets.forEach((values, index) => {
      let theKey = values.head.value;
      valuesArray.push(Object.keys(theKey));
    });
    console.log(valuesArray);

  }
}



module.exports = HashTable;
