// ===================================
// Integer Complexity 1 - Solution
// ===================================

// Based on strategy outlined in notes, we can quickly find factors

function intComplexityOne(number) {
  // default value - we can assume number > 1
  // initial array to hold arrays of factor pairs
  let factorSumArr = [];

  // Define upper bound for loop based on strategy in notes
  let factorUpperBound = Math.floor(Math.sqrt(number));

  // take each integer between one and the factorUpperBound...
  for (let i = 1; i <= factorUpperBound; i++) {
    // ...and see if it divides evenly into the number.
    if (number % i === 0) {
      // if it does, take i's factor pair...
      let pair = number / i;

      // ...add it to i...
      let pairSum = pair + i;

      // ...and push that value to the factorSum array
      factorSumArr.push(pairSum);
    }
  }
  // at this point all factor pairs have been added together and pushed into the factorSum array
  // return the lowest number from this array of values
  factorSumArr.sort();
  return factorSumArr[0];
}

// intComplexityOne(12345); => 12346 [???]
