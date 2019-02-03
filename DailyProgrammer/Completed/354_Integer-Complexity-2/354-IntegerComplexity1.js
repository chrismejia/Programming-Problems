// ===================================
// Integer Complexity 1 - Comparative Solution
// ===================================

// Based on strategy outlined in notes, we can quickly find factors

function intComplexityOne(number) {
  // default value: number * 1 ALWAYS = number
  // therefore we can start at number + 1 and work downwards if factors exist
  let lowestFactorSum = number + 1;

  // Define upper bound for loop based on strategy in notes
  let factorUpperBound = Math.floor(Math.sqrt(number));
  // let factorUpperBound = 351364;

  // take each integer between one and the factorUpperBound...
  for (let i = 1; i <= factorUpperBound; i++) {
    // ...and see if it divides evenly into the number.
    if (number % i === 0) {
      // if it does, take i's factor pair...
      let pair = number / i;

      // ...add it to i to get the pair sum
      let pairSum = pair + i;

      // if current pairSum is less than global lowestFactorSum...
      if (pairSum < lowestFactorSum) {
        // ...assign factorSum the value of current pairSum
        lowestFactorSum = pairSum;
      }
    }
  }
  // return the lowest factor sum;
  return lowestFactorSum;
}

// TEST CASES
// intComplexityOne(12); //=> 7 [CORRECT]
// intComplexityOne(456); //=> 43 [CORRECT]
// intComplexityOne(4567); //=> 4567 [CORRECT]
// intComplexityOne(12345); //=> 838 [CORRECT]

// ANSWER
// intComplexityOne(345678); //=> 3491 [CORRECT]

// BONUS
// intComplexityOne(1234567891011); //=> 4695212 [NOPE]

// ===================================
// Integer Complexity 1 - Old Array and Sorting Solution
// ===================================

// Original solution that collected ALL sums, stored them, sorted them
// and returned the first value of the stored sums array (would be lowest)

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
  let sorted = factorSumArr.sort((a, b) => {
    return a - b;
  });

  // return factorSumArr[0];
  return sorted[0];
}

intComplexityOne(12345); //=> 838 [CORRECT]
