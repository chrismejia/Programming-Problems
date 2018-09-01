// ===================================
// 25 - Solution
// ===================================

const thousandDigitFibNum = () => {
  debugger;
  let fibArr = [1, 1];
  let newFib = 0;
  let newFibLen = 1;

  // 24 and above cause perceived infinite return

  while (newFibLen < 23) {
    let sliceArr = fibArr.slice(-2);
    let fibOne = sliceArr[0];
    let fibTwo = sliceArr[1];

    newFib = fibOne + fibTwo;
    fibArr.push(newFib);
    newFibLen = newFib.toString().length;
    console.log(`[len = ${newFibLen}]`);
  }
};

thousandDigitFibNum();
