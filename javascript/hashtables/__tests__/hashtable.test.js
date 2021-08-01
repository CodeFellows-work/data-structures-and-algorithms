'use strict';



const HashTable = require('../hashtable.js');
const { Node, BinaryTree } = require('../../code-challenges/trees/trees.js');



describe('testing hashtable methods', () => {
  it('testing the add method', ()=> {
    let table = new HashTable(1);
    table.add('name', 'sunny');
    expect(table.contains('sunny'));
  });
  it('testing the get method', () => {
    let table = new HashTable(200);
    table.add('name', 'sunny');
    expect(table.get('name')).toStrictEqual({"name": "sunny"});
  });
  it('testing hashtable repeatedWord', () => {
    let table = new HashTable(100);
    let testCase = 'asdasdasfsdfasdasdfasi i i youkkjhkjh kjhk';
    expect(table.repeatedWord(testCase)).toStrictEqual('i');
  });
  it('testing lots of the same word', () => {
    let table = new HashTable(50);
    let testCase = 'a a a a a a a a a a b a a a a a a';
    expect(table.repeatedWord(testCase)).toStrictEqual('a');
  });
  it.skip('testing no repeatable words', () => {
    let table = new HashTable(100);
    let testCase = 'poop poo po';
    expect(table.repeatedWord(testCase)).toStrictEqual('');
  });


  it('testing tree intersection with given values', () => {
    let bt1 = new BinaryTree();
    let bt2 = new BinaryTree();

    let hashmap = new HashTable();

    // Binary Tree 1
    bt1.root = new Node(150);
    bt1.root.left = new Node(100);
    bt1.root.left.left = new Node(75);
    bt1.root.left.right = new Node(160);
    bt1.root.left.right.left = new Node(125);
    bt1.root.left.right.right = new Node(175);
    bt1.root.right = new Node(250);
    bt1.root.right.left = new Node(200);
    bt1.root.right.right = new Node(350);
    bt1.root.right.right.left = new Node(300);
    bt1.root.right.right.right = new Node(500);

    // Binary Tree 2
    bt2.root = new Node(42);
    bt2.root.left = new Node(100);
    bt2.root.left.left = new Node(15);
    bt2.root.left.right = new Node(160);
    bt2.root.left.right.left = new Node(125);
    bt2.root.left.right.right = new Node(175);
    bt2.root.right = new Node(600);
    bt2.root.right.left = new Node(200);
    bt2.root.right.right = new Node(350);
    bt2.root.right.right.left = new Node(4);
    bt2.root.right.right.right = new Node(500);

    expect(hashmap.treeIntersection(bt1, bt2)).toEqual([
      100, 125, 160,
      175, 200, 350,
      500
    ]);
  });
  it('testing intersection method with other values', () => {
    let bt1 = new BinaryTree();
    let bt2 = new BinaryTree();

    let hashmap = new HashTable();

    // Binary Tree 1
    bt1.root = new Node(200);
    bt1.root.left = new Node(110);
    bt1.root.left.left = new Node(70);
    bt1.root.left.right = new Node(150);
    bt1.root.left.right.left = new Node(115);
    bt1.root.left.right.right = new Node(175);
    bt1.root.right = new Node(250);
    bt1.root.right.left = new Node(200);
    bt1.root.right.right = new Node(350);
    bt1.root.right.right.left = new Node(300);
    bt1.root.right.right.right = new Node(500);

    // Binary Tree 2
    bt2.root = new Node(42);
    bt2.root.left = new Node(110);
    bt2.root.left.left = new Node(70);
    bt2.root.left.right = new Node(150);
    bt2.root.left.right.left = new Node(125);
    bt2.root.left.right.right = new Node(175);
    bt2.root.right = new Node(600);
    bt2.root.right.left = new Node(200);
    bt2.root.right.right = new Node(350);
    bt2.root.right.right.left = new Node(4);
    bt2.root.right.right.right = new Node(500);

    expect(hashmap.treeIntersection(bt1, bt2)).toEqual([
      110, 150, 175, 200, 350, 500, 70,
    ]);
  });
  it('testing with same numbers intersection method', () => {
    let bt1 = new BinaryTree();
    let bt2 = new BinaryTree();

    let hashmap = new HashTable();

    // Binary Tree 1
    bt1.root = new Node(10);
    bt1.root.left = new Node(10);
    bt1.root.left.left = new Node(10);

    bt2.root = new Node(10);
    bt2.root.left = new Node(10);
    bt2.root.left.left = new Node(10);

    expect(hashmap.treeIntersection(bt1, bt2)).toEqual([
      10,10,10
    ]);
  });
  it('testing synonym and antonym hashtables', () => {
    let hashmap = new HashTable(20);
    let table1 = new HashTable(20);
    let table2 = new HashTable(20);

    table1.add('fond', 'enamored');
    table1.add('wrath', 'anger');
    table1.add('diligent', 'employed');
    table1.add('outfit', 'garb');
    table1.add('guide', 'usher');

    table2.add('fond', 'averse');
    table2.add('wrath', 'delight');
    table2.add('diligent', 'idle');
    table2.add('guide', 'follow');
    table2.add('flow', 'jam');

    hashmap.leftJoin(table1, table2);

  });
});
