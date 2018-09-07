# Challenge #354 [Easy]: Integer Complexity - Notes

From the prompt:

> It's okay to use brute force by checking every possible value of B and C. You don't need to handle inputs larger than six digits.

Brute force sounds like fun but I think I have an idea regarding how to eliminate large numbers of test cases.

### Test Case: 12

Consider the test case of 12 and its factor pairs as shown below:

```
1 x 12
2 x 6
3 x 4
```

There are three pairs of factors, but technically, these pairs have pairs:

```
4 x 3
6 x 2
12 x 1
```

If we start testing for factors from 1, our upperbound will be the original number aka `1 x 12`.

However, when we move to 2, 6 presents itself as a factor. Since we are only dealing with positive integers, our upperbound has been reduced from 12 to 6 – the proof being that when we increment our base divisor by, we get a nice integer factor.

```
BASE  UPPER BOUND
1     12 (original number)
2     6
3     4
```

We can continue this pattern while (base <= divisor). After that, we begin mirroring results.

```
BASE  UPPER BOUND
1     12  (original number)
2     6
3     4   (last case where base <= divisor)
-------
4     3   (first case of mirroring - further results meaningless)
```

### Test Case: 36

Let's enumerate factor pairs and see where mirroring begins:

```
BASE  UPPER BOUND
1     36  (original number)
2     18
3     12
4     9
6     6   (last case where base <= divisor)
-------
9     4   (first case of mirroring - further results meaningless)
```

36 is a square so base 6 has divisor 6.

If we were to do some arbitrary division like `36 / 6.01`, the answer would be ~5.99, meaning that the base (6.01) is larger than the divisor (5.99). Thus, the upper bound of our brute force is equal to:

```js
upperBound = Math.floor(Math.sqrt(inputNumber));
```

Examples:

### Test Case: 18

```
upperBound = Math.floor(Math.sqrt(18));
           = Math.floor(4.2)
           = 4

BASE  UPPER BOUND
1     18  (original number)
2     9
3     6   (last case where base <= divisor)
-- 4 --   (mirror test upperBound)
6     3   (first case of mirroring - further results meaningless)

upperBound test pass; 18 - 4 = 14 numbers saved from testing
```

### Test Case: 140

```
upperBound = Math.floor(Math.sqrt(140));
           = Math.floor(11.8)
           = 11

BASE  UPPER BOUND
1     140  (original number)
2     70
4     35
5     28
7     20
10    14  (last case where base <= divisor)
-- 11 --  (mirror test upperBound)
14    10  (first case of mirroring - further results meaningless)

upperBound test pass; 140 - 11 = 129 numbers saved from testing
```

Don't even need internal array; just add on the spot.
