#Polynomial adding

## Installing

To install all dependencies run:

npm install

## Running

To run the program use:

node index.js

You can run the program without arguments, it will then add default polynomials ("2x^2 + 3" and "3x^3 + x^2").
If you would like to add custom polynomials run:

node index.js poly1 poly2

where poly1 poly2 should be strings in format: "nx^x + mx^y" f.e. "- 4x^2 - 4x^1 + 2"

## Testing

For tests I used Mocka platform. I tested the adding function and converting polynomials

to run the tests use:

npm test

## Adding function

The whole adding algorithm is located in addPolynomials.js file.
