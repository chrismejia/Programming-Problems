# 25 - Notes

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

- starting array has 1, 1
- while loop (newFib.length < 1000 digits)
  - capture last two nums in array
  - newFib = last two nums
  - push newFib to array
- test length of newFib
  - if newFib length === 1000 > return index of newFib

## 2nd Attempt - .toString().includes('e+999')

newFib.toString().length doesn't work

'2.70607408246957e+36'.toString().length; //=> 20
'1.146311376549147e+37'.toString().length; //=> 21

it's measuring the actual length of the that's noted in scientific notation

includes might be a better test

e.g. 6E+5 => 600 000 => 6 digits, e=5

fibTerm = 102

573147844013817200000 => 21
927372692193079200000 => 21 chars
=
1.5005205362068963e+21 => 22 chars

try newFib.toString().includes('e+999')

```
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

    if (newFib.toString().includes("e+999")) {
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
```

**2nd Attempt Failure:** .includes('e+307') => returns fibTerm = 1475

## 3rd Attempt - .toExponential().includes('e+999')

might turn out better if we truncate the answer using .toExponential()
-> that returns a string like toString() does

```
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
```

**3rd Attempt Failure:** .includes('e+307') => returns fibTerm = 1475

I think that this has more to do with the maximum value of types of numbers.

## 4th Attempt - Addressing how infinity is defined in JS

1.7976931348623157e+308 is the max value JS can output; anything above that outputs infinity
