/**
 * @see {@link https://leetcode.com/problems/find-pivot-index/description/?envType=study-plan&id=level-1 724. Find Pivot Index}
 */

/**
 * EXPLAIN
 * Pivot index is EXCLUSIVE, not to be counted in comparative sums
 *    [1,7,3,6,5,6] has pivot index 3 since 1+7+3 === 5+6
 *    The 6 at pivot index 3 is NOT counted
 *
 * First index and last index sums are always 0!
 *    [2,1,-1] has PI 0; 2@0 not counted, so it's 1 + -1
 *    [1,-1,2] also has PI 0, but on right edge, same reason
 * Return -1 if no pivot index found
 *
 * Flow
 * [1,3,7,2,2]
 * l = 0                   r = 15 - arr[0] = 14
 * l = 0 + arr[0] = 1      r = 14 - arr[1] = 11
 * l = 1 + arr[1] = 4      r = 11 - arr[2] = 4
 */

/**
 * APPROACH
 * Create leftSum, rightSum vals; default left to 0
 *
 * START LOOP at second val
 *    running sum to get first right sum
 * END LOOP
 *
 * if l === r, return 0 (left edge)
 *
 * START 2ND LOOP at second val
 *    i - 1 added to leftVal
 *    subtract curr val from right sum
 *    check left===right; if so, return i
 * END 2ND LOOP
 *
 * no PI found, return -1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let left = 0;
  let right = 0;

  // 1st Loop to establish right sum
  for (let i = 1; i < nums.length; i++) {
    const currVal = nums[i];
    right += currVal;
  }

  // Left-edge check
  if (left === right) {
    return 0;
  }

  // Begin looping through array to add/subtract from left/right totals
  for (let j = 1; j < nums.length; j++) {
    // Add prevVal to left
    left += nums[j - 1];

    // Subtract currVal from right
    right -= nums[j];

    // Equality check
    if (left === right) {
      return j;
    }
  }

  // Loop ended, no PI found
  return -1;
};

/**
 * COMPLEXITY
 * TIME     O(N) - b/c of one loop
 * SPACE    O(1) - left and right vars are constant integers
 */

/**
 * OPTIMIZE
 *
 * calc sum of right first
 * LOOP
 *    grab curr num
 *    subtract curr from right
 *    test (left === right) ? return index
 *    add curr to left
 * END LOOP
 *
 * no match found; return -1
 */

/**
 * READ       01:25
 * EXPLAIN    02:00   03:25
 * APPROACH   22:35   26:01
 * CODE       11:36   37:38
 * TEST       1st Attempt
 * OPTIMIZE
 */
