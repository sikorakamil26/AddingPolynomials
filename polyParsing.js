const createPolynomialFromString = (stringPolynomial) => {
  if (stringPolynomial === undefined) {
    throw new TypeError("createPolynomialFromString() expects 1 string.");
  }
  let splitString = stringPolynomial.split(" ");
  let newPoly = {};
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] !== "+") {
      if (splitString[i] === "-") {
        splitString[i + 1] = `-${splitString[i + 1]}`;
        continue;
      }
      let [a, b] = splitString[i].split("x^");
      if (!splitString[i].includes("x^")) {
        a = splitString[i];
        b = 0;
      }
      a = parseFloat(a);
      if (!a) {
        a = 1;
      }
      newPoly[b] = parseFloat(a);
    }
  }
  return newPoly;
};

const createStringFromPoly = (polynomial) => {
  if (polynomial === undefined) {
    throw new TypeError("createStringFromPoly() expects 1 object.");
  }
  let result = "";
  for (let [key, value] of Object.entries(polynomial)) {
    if (value >= 0) {
      result =
        key === "0"
          ? " + " + value + result
          : " + " +
            (value === 1 ? "x^" + key + result : value + "x^" + key + result);
    }
    if (value < 0) {
      result =
        key === "0"
          ? " - " + Math.abs(value) + result
          : " - " +
            (Math.abs(value) === 1
              ? "x^" + key + result
              : Math.abs(value) + "x^" + key + result);
    }
  }
  resultSplit = result.split(" ");
  if (resultSplit[1] !== "-") {
    resultSplit = resultSplit.slice(2);
  } else {
    resultSplit = resultSplit.slice(1);
  }

  result = resultSplit.join(" ");

  return result;
};

module.exports.createPolynomialFromString = createPolynomialFromString;
module.exports.createStringFromPoly = createStringFromPoly;
