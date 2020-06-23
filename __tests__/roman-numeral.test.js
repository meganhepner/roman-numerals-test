import { reverseNumber } from './../src/roman-numerals.js';

describe('reverseNumber', () => {
  test ('should correctly reverse a number', ()=> {
    const number = 631;
    expect(reverseNumber(number)).toEqual([1,3,6]);
  });
});

