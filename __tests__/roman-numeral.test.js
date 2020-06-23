import { reverseNumber, convertOnes, convertTens, convertHundreds, convertThousands, inputInvalid, convertNumbersToRoman, createRomanNumeralsString} from './../src/roman-numerals.js';

describe('inputInvalid', () => {
  test ('should return true if the input is invalid', () => {
    const number = 5000;
    expect(inputInvalid(number)).toEqual(true);
  });
});

describe('reverseNumber', () => {
  test ('should correctly reverse a number', ()=> {
    const number = 631;
    expect(reverseNumber(number)).toEqual([1,3,6]);
  });
});

describe('convertOnes', () => {
  test ('convert all numbers at index[0] to roman numerals', () => {
    const number = 8;
    expect(convertOnes(number)).toEqual("VIII");
  });
});

describe('convertTens', () => {
  test ('convert all numbers at index[1] to roman numerals', () => {
    const number = 3;
    expect(convertTens(number)).toEqual("XXX");
  });
});

describe('convertHundreds', () => {
  test ('convert all numbers at index[2] to roman numerals', () => {
    const number = 2;
    expect(convertHundreds(number)).toEqual("CC");
  });
});

describe('convertThousands', () => {
  test ('convert all numbers at index[3] to roman numerals', () => {
    const number = 3;
    expect(convertThousands(number)).toEqual("MMM");
  });
});

describe('convertNumbersToRoman', () => {
  test ('converts the number to an array of roman numerals', () => {
    const number = 1234;
    expect(convertNumbersToRoman(number)).toEqual(["IV", "XXX", "CC", "M"]);
  });
});

describe('createRomanNumeralsString', () => {
  test ('reverses the order of the array and pushes it into a string', () => {
    const number = ["IV", "XXX", "CC", "M"];
    expect(createRomanNumeralsString(number)).toEqual("MCCXXXIV");
  });
});





