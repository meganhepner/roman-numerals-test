import { reverseNumber } from './../src/main.js';

describe('reverseNumber', () => {
  test ('should correctly reverse a number', ()=> {
    const number = 631;
    expect(reverseNumber(number)).toEqual([1,3,6]);
  });
});

