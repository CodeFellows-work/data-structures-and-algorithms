'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('should add value to empty list', () => {
    const linkedlist = new LinkedList();
    linkedlist.insert(1);
    expect(linkedlist.head.value).toBe(1);
  });
  it('should return a string linked list', () => {
    const linkedlist = new LinkedList();
    linkedlist.insert('c');
    linkedlist.insert('b');
    linkedlist.insert('a');
    let string = linkedlist.toString();
    expect(string).toStrictEqual('{a} -> {b} -> {c} -> NULL');
  });
});
