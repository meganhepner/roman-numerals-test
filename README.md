# Roman Numeral Test Practice

#### _{Converts inputted numbers to roman numerals}, {06/23/2020}_

#### By **Evgeniya Chernaya**, **Megan Hepner**

## Description

_{This application separates the user and business logic in the existing roman numeral files, adds webpack, and tests all the functions in
the program with Jest.}_

## Setup/Installation Requirements

* Clone/download the repository
* Type npm install in the terminal
* Type npm run build
* Type npm run start

## Specification

| Behavior | Input | Output|
|----------|-------|-------|
| Takes User input and returns i | Text | Text |
| Checks if input is Correct(input must be interger number) | text | "Incorrect input, the number must be between 1 and 3,999" |
| Check if input between 1 and 3,999 | 4000 | "Incorrect input, the number must be between 1 and 3,999" |
| Create array with digits of input number in reverse order(so decimal corrisponds with same index every time) | 654 | [6,5,4] |
| Convert at index 0 accordingly (ones) | 1,2,3,4,5,6,7,8,9 | I, II, III, IV, V, VI, VII, VIII, IX |
| Convert at index 1 accordingly (tens) | 10, 20, 30, 40, 50, 60, 70, 80, 90 | X, XX, XXX, XL, L, LX, LXX, LXXX, XC |
| Convert at index 2 accordingly (hundreds) | 100, 200, 300, 400, 500, 600, 700, 800, 900 | C, CC, CCC, CD, D, DC, DCC, DCCC, CM |
| Convert at index 3 accordingly (thousands) | 1000, 2000, 3000 | M, MM, MMM |
| Create array for roman numeral translation for each number | [6, 5, 4] | ["VI", "L", "CD"] |
| Join the roman numeral array to the result string from the end of the array | ["VI", "L" , "CD"] | "CDLVI" |

## Known Bugs

_{No known bugs}_

## Support and contact details

* Evgeniya: evgenya.chernaya@gmail.com
* Megan: megan.hepner@gmail.com

## Technologies Used

  * HTML
  * CSS
  * JavaScript
  * JQuery
  * Webpack
  * Jest
  

### License

_This software is licensed under the MIT license_

Copyright (c) 2020 **Evgeniya Chernaya**, **Megan Hepner**.
