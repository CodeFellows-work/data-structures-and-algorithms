'use strict';

const insertionSort = require('./insertion.js');


describe('Testing Insertion Sort Function', () => {
  it('testing insertionSort() with nearly-sorted array', () => {
    let arr = [2,3,5,7,13,11]; 
    insertionSort(arr);
    expect(arr).toStrictEqual(arr.sort());
  });
  it('testing insertionSort() with few uniques', () => {
    let arr = [5,12,7,5,5,7];
    insertionSort(arr);
    expect(arr).toStrictEqual(arr.sort());
  });
  it('testing insertionSort() with reverse-sorted', () => { 
    let arr = [20,18,12,8,5,-2];
    insertionSort(arr);
    expect(arr).toStrictEqual(arr.sort());
  });
});
