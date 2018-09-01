# 05 - Notes

Factorization seems to be key here in reducing redundancies in any checks we'd do. Immediately, we can skip 1, b/c `(anyNum % 1 === 0)`. This means we're looking at the divisors from 20 to 2.

```
Num   Factors
20    1,2,4,5,10,20
19    1,19
18    1,2,3,6,9,18
17    1,17
16    1,2,4,8,16
15    1,3,5,15
14    1,2,7,14
13    1,13
12    1,2,3,4,6,12
11    1,11
10    1,2,5,10
..
```

We can actually stop determining factor here b/c in the factors for 10-20, 1 to 10 are actually accounted for, on top of all nums 11-20. Therefore, we just need the numbers that cover the first instance of a factor, `plus the primes present from 10-20; 11, 13, 17, 19`.

```
Divisor   Current Factors
20        [1,2,4,5,10,20]
18        [1,2,3,4,5,6,9,10,20]
16        [1,2,3,4,5,6,8,9,10,16,20]
14        [1,2,3,4,5,6,7,8,9,10,14,16]
..         ^ ^ ^ ^ ^ ^ ^ ^ ^ ^^  [1-10 present!]
```

By the time we've reached 14, we've accounted for all numbers 1-10. Missing numbers are 19, 17, 15, 13, 11. This means we can actually just test (number % [20 to 11] === 0). First to pass all tests is the number we're looking for.

Another nice thing about this: since we've concluded that we need a num that divides evenly from 20 to 11, we can cut out a ton of nums to (-=) through.

```
const smallestMultiple = num => {
  let divisors = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];

  // get num!
  let upperCap = 1; // starting value

  for (let i = 0; i < divisors.length; i++) {
    console.log(`${divisors[i]}!  ${upperCap}`);
    upperCap *= divisors[i];
  }
  return upperCap;
};

smallestMultiple(20);
```

20! is a massive number. By definition, all nums from 20 down to 1 divide evenly into it. In contrast, (20 x 19 x 18 x ... x 12 x 11) yields a much smaller number that we can work our way down from in testing.

```
 (20 to 11)  = 670 442 572 800
 20!         = 2 432 902 008 176 640 000
```

Might be best to try an `array.forEach(function(array))` to iterate through.

should be to set a cap at num! and work our way down by -= num each time. Subtracting num each time will guarantee a multiple of num, our largest divisor.
