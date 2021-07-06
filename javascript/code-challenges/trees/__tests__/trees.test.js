'use strict';

const {Node} = require('../trees.js');
const {BinarySearch} = require('../trees.js');

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
});

