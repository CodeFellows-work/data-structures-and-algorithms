'use strict';

const Queue = require('../queue.js');
const Stack = require('../stacks.js');
// const Queue = require('../queue.js');
const AnimalShelter = require('../animal-shelter.js');


describe('Stacks and Queues', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
  it('testing pushing a single value', () => {
    const stack = new Stack();
    stack.push('a');
    let stackResults = JSON.stringify(stack);
    expect(stackResults).toStrictEqual("{\"top\":{\"value\":\"a\",\"next\":null}}");
  });
  it('test pushing multiple values', () => {
    const stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.push('d');
    let stackResults = JSON.stringify(stack);
    expect(stackResults).toStrictEqual("{\"top\":{\"value\":\"d\",\"next\":{\"value\":\"c\",\"next\":{\"value\":\"b\",\"next\":{\"value\":\"a\",\"next\":null}}}}}");
  });
  it('test pop off stack', () => {
    const stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.push('d');
    stack.pop();
    let stackResults = JSON.stringify(stack);
    expect(stackResults).toStrictEqual("{\"top\":{\"value\":\"c\",\"next\":{\"value\":\"b\",\"next\":{\"value\":\"a\",\"next\":null}}}}");
  });
  it('test pop to empty the stack', () => {
    const stack = new Stack();
    stack.push('a');
    stack.pop();
    let stackResults = JSON.stringify(stack);
    expect(stackResults).toStrictEqual("{\"top\":null}");
  });
  it('test peek the next item on stack', () => {
    const stack = new Stack();
    stack.push('a');
    stack.push('b');
    // stack.peek();
    let stackResults = stack.peek();
    expect(stackResults).toStrictEqual('b');
  });
  it('test insantiate empty stack', () => {
    const stack = new Stack();
    let stackResults = stack.isEmpty;
    expect(stackResults).toBeTruthy;
  });
  it('test peek on empty raises exception', () => {
    const stack = new Stack();
    let stackResults = stack.peek();
    expect(stackResults).toStrictEqual('this is empty');
  });
  it('test pop on empty raises exception', () => {
    const stack = new Stack();
    let stackResults = stack.pop();
    expect(stackResults).toStrictEqual('this is empty');
  });
  it('test single enqueue into queue', () => {
    const queue = new Queue();
    queue.enqueue('a');
    let queueResults = JSON.stringify(queue);
    expect(queueResults).toStrictEqual("{\"front\":{\"value\":\"a\",\"next\":null},\"rear\":{\"value\":\"a\",\"next\":null}}")
  });
  it('test multiple enqueue into queue', () => {
    const queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    let queueResults = JSON.stringify(queue);
    expect(queueResults).toStrictEqual("{\"front\":{\"value\":\"a\",\"next\":{\"value\":\"b\",\"next\":null}},\"rear\":{\"value\":\"b\",\"next\":null}}");
  });
  it('test dequeue out of specific value', () => {
    const queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    let queueResults = JSON.stringify(queue.dequeue('a'));
    expect(queueResults).toStrictEqual("\"a\"");
  });
  it('test peek into a queue', () => {
    const queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    let queueResults = queue.peek();
    expect(queueResults).toStrictEqual('a');
  });
  it.skip('test dequeue until empty', () => {
    const queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.enqueue('d');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    let queueResults = JSON.stringify(queue);
    expect(queueResults).toStrictEqual('null');
  });
  it('test empty queue', () => {
    const queue = new Queue();
    let queueResults = queue.isEmpty();
    expect(queueResults).toStrictEqual('this is empty');
  });
  it.skip('test dequeue on empty queue raises exception', () => {
    const queue = new Queue(); 
    let queueResults = queue.dequeue();
    expect(queueResults).toStrictEqual('');
  });
  it('test peek on empty queue raises expception', () => {
    const queue = new Queue();
    let queueResults = queue.peek();
    expect(queueResults).toStrictEqual('this is empty');
  });
  it('test enqueue animal', () => {
    const animalQueue = new AnimalShelter();
    animalQueue.enqueue('dog');
    animalQueue.enqueue('cat');
    let queueResults = JSON.stringify(animalQueue);
    expect(queueResults).toStrictEqual("{\"front\":{\"value\":\"dog\",\"next\":{\"value\":\"cat\",\"next\":null}},\"rear\":{\"value\":\"cat\",\"next\":null}}");
  });
  it('test dequeue animal return animal', () => {
    const animalQueue = new AnimalShelter();
    animalQueue.enqueue('dog');
    let queueResults = animalQueue.dequeue('dog');
    expect(queueResults).toStrictEqual('dog');
  });
  it('test dequeue animal return null if pref is not dog or cat', () => {
    const animalQueue = new AnimalShelter();
    animalQueue.enqueue('dog');
    let queueResults = animalQueue.dequeue('monkey');
    expect(queueResults).toStrictEqual(null);
  });
});
