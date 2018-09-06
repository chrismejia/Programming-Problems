// ===================================
// Two Sum - Solution
// ===================================

function twoSum(array, target) {
  let indices = [];

  // loop through array
  for (let i = 0; i < array.length; i++) {
    // ...take one number...
    let numOne = array[i];

    for (let j = i + 1; j < array.length; j++) {
      // ...and a different number in the array...
      let numTwo = array[j];
      // ...and add them together
      let testSum = numOne + numTwo;

      // if their sum is equals the target number...
      if (testSum === target) {
        // ..push the indices of numOne and numTwo to indices array
        indices.push(i, j);
      }
    }
  }
  return indices;
}

twoSum([2, 7, 11, 15], 9);
// => [ 0, 1 ] [CORRECT]
twoSum([2, 7, 11, 15], 18);
// => [ 1, 2 ] [CORRECT]
