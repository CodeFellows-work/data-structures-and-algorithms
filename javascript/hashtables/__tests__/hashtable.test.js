'use strict';



const HashTable = require('../hashtable.js');


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
  it('testing no repeatable words', () => {
    let table = new HashTable(100);
    let testCase = 'poop poo po';
    expect(table.repeatedWord(testCase)).toStrictEqual('');
  });
});
