# 02 - Notes

Dirty version with original notes

```js
const evenFibonacciSum = maxNum => {
  let evenFibSum = 0;

  let fibNums = [1, 2];

  // This method requires a padded start: [1, 2]
  // let fibNums = [1, 2, 3, 5, 8, 13]; // lastFibInArray yields 13 here permanently
  // let lastFibInArray = fibNums[fibNums.length - 1]; // weirdly, this seems to work in the loop to iterate through, but NOT as a while loop condition since it seems to be permanently referring to the initial fibNums final index: 2 or 13
  // let lastNumCheck = fibNums.slice(-1);  // .slice makes a copy

  // for (let i = 0; i < maxNum; i++) { // This doesn't seem like it'll work because I don't understand how to increment recursively
  // while (lastFibInArray < maxNum) { // for some reason keeps putting out 2 creating infinite while loops; probably a PBR problem detailed above
  // for (let j = 0; j < 5; j++) { // everything loops fine but I think the reference here to lastFibInArray is permanently setting itself at the start to 2 or 13
  // while (currFibNum < maxNum) { // doesn't work because it's defined later inside the block

  while (fibNums[fibNums.length - 1] < maxNum) {
    // direct value checks seem to work and doesn't loop
    if (fibNums[fibNums.length - 1] % 2 === 0) {
      evenFibSum += fibNums[fibNums.length - 1];
      // console.log(`evenFibSum ${evenFibSum}; ${fibNums[fibNums.length - 1]}`)
    }

    let makeFibNum = fibNums.slice(-2);
    // console.log(`makeFibNum is ${makeFibNum}`);
    let currFibNum = makeFibNum[0] + makeFibNum[1];
    // console.log(`${makeFibNum[0]} + ${makeFibNum[1]} = ${currFibNum}`);
    fibNums.push(currFibNum);
    // console.log(`currArray is ${fibNums}
    // currLastNum is ${fibNums[fibNums.length - 1]}
    // `);
  }

  // fill fibNums with fibNums
  // .slice(lastTwoValues) off fibNums
  // .push(secondLast + lastValue)
  // This one didn't worklastNumCheck = fibNums.slice(-1)
  // if (lastNumCheck > maxNum) break;
  // if (lastNumCheck % 2 === 0 ) evenFibSum += lastNumCheck
  return evenFibSum;
};

evenFibonacciSum(4000000); //=> 4613732 [Correct]
```
