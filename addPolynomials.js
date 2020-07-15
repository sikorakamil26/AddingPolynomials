// *** Adding function *** time complexity O(n+m)
const addPolynomials = (polynomial1, polynomial2) => {
  if (polynomial1 === undefined || polynomial2 === undefined) {
    throw new TypeError("addPolynomials() expects exactly 2 objects.");
  }

  let result = {};
  [polynomial1, polynomial2].forEach((polynomial) => {
    for (let [key, value] of Object.entries(polynomial)) {
      result[key] = result[key] ? result[key] + value : value;
    }
  });
  return result;
};

module.exports = addPolynomials;
