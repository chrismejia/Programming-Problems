// ===================================
// Median of Two Sorted Arrays - Solution
// ===================================

function findMedianSortedArrays(nums1, nums2) {
  // combine and sort both arrays in one method chain
  let combinedAndSortedArr = nums1.concat(nums2).sort();

  // 2 CASES
  // #1 - if the amount of numbers in the combined arrays is odd...
  if (combinedAndSortedArr.length % 2 !== 0) {
    // return combinedAndSortedArr[middleValue]
    let middleValue = Math.floor(combinedAndSortedArr.length / 2);

    // ...return the middle value of the array
    return combinedAndSortedArr[middleValue];
  }
  // #2 - amount of numbers is even
  else {
    // take the two middle values of the array...
    let numOne = combinedAndSortedArr[combinedAndSortedArr.length / 2];
    let numTwo = combinedAndSortedArr[combinedAndSortedArr.length / 2 - 1];

    // ... and return their sum divided by 2
    return (numOne + numTwo) / 2;
  }
}

// nums1 = [1, 2]
// nums2 = [3]
// findMedianSortedArrays(nums1, nums2); => 2 [CORRECT]

// nums3 = [5, 6]
// nums4 = [7, 8]
// findMedianSortedArrays(nums3, nums4); => 6.5 [CORRECT]
