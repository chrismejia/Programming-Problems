# 25 - Notes

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

- starting array has 1, 1
- while loop (newFib.length < 1000 digits)
  - capture last two nums in array
  - newFib = last two nums
  - push newFib to array
- test length of newFib
  - if newFib length === 1000 > return index of newFib

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

try newFib.toString().includes('e+20')
