'use strict';

const {Node, BinaryTree} = require('../trees.js');
const {BinarySearch} = require('../trees.js');
const {BreadthFirstSearch} = require('../trees.js');

describe('trees', () => {

  it('tests adding node to tree - adding one node will presumably add to the left first', () => {
    const bt = new BinarySearch();
    bt.root = new Node(1);
    bt.root.left = new Node(2);
    bt.root.right = new Node(3);
    bt.root.left.left = new Node(4);
    bt.add(5);
    let treeResult = JSON.stringify(bt);
    expect(treeResult).toStrictEqual("{\"root\":{\"value\":1,\"left\":{\"value\":2,\"left\":{\"value\":4,\"left\":null,\"right\":null},\"right\":null},\"right\":{\"value\":3,\"left\":{\"value\":5,\"left\":null,\"right\":null},\"right\":null}}}");
  });
  it('tests contains method, whether value is in tree atleast once', () => {
    const bt = new BinarySearch();
    bt.root = new Node(1);
    bt.root.left = new Node(2);
    bt.root.right = new Node(3);
    bt.root.left.left = new Node(4);
    console.log(bt.contains(4));
  });
  it('tests max value', () => {
    const bt = new BinarySearch();
    bt.root = new Node(1);
    bt.root.left = new Node(2);
    bt.root.right = new Node(3);
    console.log(bt.findMax());
    expect(bt.findMax()).toStrictEqual(3);
  });
  it.skip('test breadth first output', () => {
    const bfs = new BreadthFirstSearch();
    const bt = new BinaryTree();

    bt.root = new Node(2);
    bt.root.left = new Node(7);
    bt.root.right = new Node(5);
    bt.root.left.left = new Node(2);
    bt.root.left.right = new Node(6);
    bt.root.right.right = new Node(9);
    bt.root.left.right.left = new Node(5);
    bt.root.left.right.right = new Node(11);
    bt.root.right.right.left = new Node(4);

    console.log(bt);
    bfs.breadthFirst(bt);
  });
});

