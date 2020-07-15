const polyParsing = require("./polyParsing");
const addPolynomials = require("./addPolynomials");
let polynomial1;
let polynomial2;

let arguments = process.argv.slice(2);

if (arguments.length === 0) {
  polynomial1 = { "2": 2, "0": 3 };
  polynomial2 = { "3": 3, "2": 1 };
} else if (arguments.length === 2) {
  polynomial1 = polyParsing.createPolynomialFromString(arguments[0]);
  polynomial2 = polyParsing.createPolynomialFromString(arguments[1]);
} else {
  throw new TypeError(
    'Please provide exatly 0 or 2 string arguments in format ax^a bx^b f.e.: (node addPoly.js "2x^2 + 3x^1 + 2" "- 2x^2 - 3x^1 - 4.5")'
  );
}

console.log("\nInput parameters:");
console.log(polynomial1);
console.log(polynomial2);
console.log("\n");
console.time("Adding polynomials");
let result = addPolynomials(polynomial1, polynomial2);
console.timeEnd("Adding polynomials");
console.log("result: ");
console.log(result);
console.log("as string: \n\n" + polyParsing.createStringFromPoly(result));

console.log("\n");
