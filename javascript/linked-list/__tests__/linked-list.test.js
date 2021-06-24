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
  it('Testing to append', () => {
    const linkedlist = new LinkedList();
    linkedlist.insert('b');
    linkedlist.insert('a');
    linkedlist.append('z');
    expect(linkedlist.head.value).toBe('a');
    expect(linkedlist.head.next.value).toBe('b');
    expect(linkedlist.head.next.next.value).toBe('z');
  });
  it('Testing for inserting before', () => {
    const linkedlist = new LinkedList();
    linkedlist.insert('c');
    linkedlist.insert('b');
    linkedlist.insert('a', 'b');
    let convertToStringForTest = linkedlist.toString();
    expect(convertToStringForTest).toStrictEqual('{a} -> {b} -> {c} -> NULL');
  });
  it('Testing for inserting after', () => {
    const linkedlist = new LinkedList();
    linkedlist.insert('c');
    linkedlist.insert('b');
    linkedlist.insert('a');
    linkedlist.insertAfter('c', 'd');
    let convertToStringForTest = linkedlist.toString();
    expect(convertToStringForTest).toStrictEqual('{a} -> {b} -> {c} -> {d} -> NULL');
  });
  it('Testing kth position', () => {
    const linkedlist = new LinkedList();
    linkedlist.insert('a');
    linkedlist.insert('b');
    linkedlist.insert('c');
    expect(linkedlist.kthFromTheEnd(1)).toStrictEqual('b'); //in the middle of the list
    expect(linkedlist.kthFromTheEnd(0)).toStrictEqual('a'); //last in the list
    expect(linkedlist.kthFromTheEnd(2)).toStrictEqual('c'); //first on the list
    expect(linkedlist.kthFromTheEnd(4)).toStrictEqual('Exception'); //exceeds node length
    expect(linkedlist.kthFromTheEnd(-1)).toStrictEqual('Exception'); //negative number
    expect(linkedlist.kthFromTheEnd(3)).toStrictEqual('Exception'); //length of the linked list
  });
  it('Testing kth position but Linked list size of 1', () => {
    const linkedlist = new LinkedList();
    linkedlist.insert('a');
    expect(linkedlist.kthFromTheEnd(0)).toStrictEqual('a');
    expect(linkedlist.kthFromTheEnd(1)).toStrictEqual('Exception');
  });
});
