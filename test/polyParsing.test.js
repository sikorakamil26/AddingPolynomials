const polyParsing = require("../polyParsing");

var expect = require("chai").expect;

describe("#createStringFromPoly()", function () {
  context("without arguments", function () {
    it("should return error", function () {
      expect(function () {
        polyParsing.createPolynomialFromString();
      }).to.throw(TypeError, "createPolynomialFromString() expects 1 string.");
    });
  });

  context("with one argument", function () {
    it("should correctly convert to polynomial with only positive values", function () {
      expect(polyParsing.createPolynomialFromString("2x^2 + x^1 + 2")).to.eql({
        "2": 2,
        "1": 1,
        "0": 2,
      });
    });
    it("should correctly convert to polynomial with positive and negative values", function () {
      expect(
        polyParsing.createPolynomialFromString("- 12x^4 + 2x^2 + -3x^1 + 2")
      ).to.eql({
        "4": -12,
        "2": 2,
        "1": -3,
        "0": 2,
      });
    });
    it("should correctly convert to polynomial with positive and negative real numbers", function () {
      expect(
        polyParsing.createPolynomialFromString("- 123x^123 - 2x^1 + 3x^2 - 4.5")
      ).to.eql({
        "123": -123,
        "1": -2,
        "2": 3,
        "0": -4.5,
      });
    });
  });
});

describe("#createStringFromPoly()", function () {
  context("without arguments", function () {
    it("should return error", function () {
      expect(function () {
        polyParsing.createStringFromPoly();
      }).to.throw(TypeError, "createStringFromPoly() expects 1 object.");
    });
  });

  context("with one argument", function () {
    it("should correctly convert to string with only positive values", function () {
      expect(
        polyParsing.createStringFromPoly({
          "2": 2,
          "1": 1,
          "0": 1,
        })
      ).to.eql("2x^2 + x^1 + 1");
    });
    it("should correctly convert to string with positive and negative values", function () {
      expect(
        polyParsing.createStringFromPoly({
          "4": -12,
          "2": 2,
          "1": -3,
          "0": 2,
        })
      ).to.eql("- 12x^4 + 2x^2 - 3x^1 + 2");
    });
    it("should correctly convert to string with positive and negative real numbers", function () {
      expect(
        polyParsing.createStringFromPoly({
          "123": -123,
          "1": -2,
          "2": 3,
          "0": -4.5,
        })
      ).to.eql("- 123x^123 + 3x^2 - 2x^1 - 4.5");
    });
  });
});
