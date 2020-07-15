const addingPolynomials = require("../addPolynomials");

var expect = require("chai").expect;

describe("#addingPolynomials()", function () {
  context("without arguments", function () {
    it("should return error", function () {
      expect(function () {
        addingPolynomials();
      }).to.throw(TypeError, "addPolynomials() expects exactly 2 objects.");
    });
  });

  context("With correct object arguments, same size", function () {
    it("should return sum of arguments", function () {
      let p1 = { "0": 2, "1": 3, "2": 2 };
      let p2 = { "0": 4.5, "1": 2, "2": 3 };
      let expectedResult = { "0": 6.5, "1": 5, "2": 5 };
      expect(addingPolynomials(p1, p2)).to.eql(expectedResult);
    });
  });

  context(
    "With correct object arguments, same size, negative values",
    function () {
      it("should return sum of arguments", function () {
        let p1 = { "0": 2, "1": 3, "2": 2 };
        let p2 = { "0": -4.5, "1": -2, "-2": -3 };
        let expectedResult = { "0": -2.5, "1": 1, "2": 2, "-2": -3 };
        expect(addingPolynomials(p1, p2)).to.eql(expectedResult);
      });
    }
  );

  context(
    "With correct object arguments, same size, different exponents",
    function () {
      it("should return sum of arguments", function () {
        let p1 = { "2": 2, "0": 3 };
        let p2 = { "3": 3, "2": 1 };
        let expectedResult = { "3": 3, "2": 3, "0": 3 };
        expect(addingPolynomials(p1, p2)).to.eql(expectedResult);
      });
    }
  );

  context(
    "With correct object arguments, different size, different exponents",
    function () {
      it("should return sum of arguments", function () {
        let p1 = { "2": 2, "0": 3, "1": 123 };
        let p2 = { "4": 3, "5": 2 };
        let expectedResult = { "5": 2, "4": 3, "2": 2, "1": 123, "0": 3 };
        expect(addingPolynomials(p1, p2)).to.eql(expectedResult);
      });
    }
  );
});
