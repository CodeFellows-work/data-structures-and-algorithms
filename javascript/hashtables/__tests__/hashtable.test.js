'use strict';



const HashTable = require('../hashtable.js');


describe('testing hashtable methods', () => {
  it('testing the add method', ()=> {
    let table = new HashTable(1);
    table.add('name', 'sunny');
    console.log(table);
    expect(table.contains('sunny'));
  });
  it('testing the get method', () => {
    let table = new HashTable(200);
    table.add('name', 'sunny');
    expect(table.get('name')).toStrictEqual({"name": "sunny"});
  });
});
