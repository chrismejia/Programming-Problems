// ===================================
// 25 - Solution
// ===================================

const thousandDigitFibNum = () => {
  debugger;
  // fibTerm = 102
  // 573147844013817200000 => 21
  // 927372692193079200000 => 21

  // let fibOne = 573147844013817200000;
  // let fibTwo = 927372692193079200000;
  // default values
  let fibOne = 1;
  let fibTwo = 1;
  let fibTerm = 2;
  let fibDoesNotHave1000Digits = true;

  while (fibDoesNotHave1000Digits) {
    let newFib = fibOne + fibTwo;

    if (newFib.toExponential(1).includes("e+999")) {
      fibDoesNotHave1000Digits = false;
      return fibTerm;
    }
    // increment fibonacci sequence term
    fibTerm++;
    // reassign first two terms
    fibOne = fibTwo;
    fibTwo = newFib;
  }
};

thousandDigitFibNum();
