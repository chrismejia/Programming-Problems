/**
 * @see {@link https://leetcode.com/problems/running-sum-of-1d-array/description/?envType=study-plan&id=level-1 1480. Running Sum of 1D Array}
 */

/**
 * APPROACH
 * create an array that will be returned
 * create num to store running sum, assign arr[0] starting val
 *
 * start loop through array
 *    first num of runSumArr is always arr[0]
 *      start at run sum two
 *    get curr num
 *    add to run sum
 *    push that sum to arr
 *    --- next num
 * end loop
 *
 * return runsumarr
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  // Store first num of nums arr as starting val
  let currSum = nums[0];

  // Assign first value of return array to currSum
  const runSumArr = [currSum];

  // Start at SECOND val in loop, if more than one,
  // since first sum is just first val
  for (let i = 1; i < nums.length; i++) {
    const currNum = nums[i];
    currSum += currNum;
    runSumArr.push(currSum);
  }

  // Return finished running sum array
  return runSumArr;
};
/**
 * READ       00:33
 * EXPLAIN    03:42   04:15
 * APPROACH   03:19   07:34
 * CODE       1st Attempt
 * TEST
 * OPTIMIZE
 */
