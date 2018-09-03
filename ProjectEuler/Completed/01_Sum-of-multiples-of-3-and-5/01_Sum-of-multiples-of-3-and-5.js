//===================================
// #1 - Solution
// => straightforward for a first problem
//===================================

const countMultiples = maxNum => {
  let finalSum = 0;

  for (let i = 0; i < maxNum; i++) {
    // Problem said UNDER 1000!
    let currNum = i;

    if (currNum % 3 === 0 || currNum % 5 === 0) finalSum += i;
  }
  return finalSum;
};

countMultiples(1000); //=> 233168 [Correct]
