//===================================
// #2 - Solution
// => god this sucked to debug; see notes for full working details
//===================================

const evenFibonacciSum = maxNum => {
  let evenFibSum = 0;

  let fibNums = [1, 2]; // This method requires a padded start: [1, 2]

  // fibNums[fibNums.length - 1] needs to be spelled out here, because by PBR, it seems like the array reference that was originally here and the direct value assignment methods leads to the difference between this working or not.

  while (fibNums[fibNums.length - 1] < maxNum) {
    if (fibNums[fibNums.length - 1] % 2 === 0) {
      evenFibSum += fibNums[fibNums.length - 1];
    }

    let makeFibNum = fibNums.slice(-2);
    let currFibNum = makeFibNum[0] + makeFibNum[1];
    fibNums.push(currFibNum);
  }
  return evenFibSum;
};

evenFibonacciSum(4000000); //=> 4613732 [Correct]
