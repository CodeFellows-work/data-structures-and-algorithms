'use strict';

const { Hash } = require('crypto');

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
}



module.exports = HashTable;
