/**
 * generateIntegersArray(firstNumber, lastNumber):
 * - receives two numbers
 * - returns an array with the integers between the two numbers
 *
 * e.g.
 * generateIntegersArray(2, 5) -> [2, 3, 4, 5]
 * generateIntegersArray(4, 9) -> [4, 5, 6, 7, 8, 9]
 *
 */
function generateIntegersArray(firstNumber, lastNumber) {
  const integersArray = [];
  integersArray.push(firstNumber);
  while (firstNumber < lastNumber) {
    integersArray.push(firstNumber + 1);
    firstNumber = firstNumber + 1;
  }
  return integersArray;
}

// generateIntegersArray(3, 7);
/**
 * noZeroes(numberString):
 * - receives a number as a string
 * - removes any zeroes at the beginning and the end of the number string
 * - returns the resulting number string without zeroes at the beginning or the end
 *
 * e.g.
 * noZeroes("0011000") -> "11"
 * noZeroes("0130401431400") -> "1304014314"
 *
 */
function noZeroes(numberString) {
  let nStr = numberString;
  let i = 0;
  while (i < numberString.length) {
    if (numberString.startsWith("0")) {
      nStr = numberString.slice(-1, numberString.length);
      i++;
    }
    console.log("not working");
    i = numberString.length;
  }
  i = 0;
  while (i < numberString.length) {
    if (numberString.endsWith("0")) {
      nStr = numberString.slice(0, i - 1);
      console.log(nStr);
      i++;
    }
    i = numberString.length;
  }
  return console.log(nStr);
}

noZeroes("0101100");

// console.log(generateIntegersArray(3, 7));
// console.log(noZeroes("001100"));
module.exports = {
  // generateIntegersArray,
  noZeroes,
};
