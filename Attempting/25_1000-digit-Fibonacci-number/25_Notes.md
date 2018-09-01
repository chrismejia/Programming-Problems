# 25 - Notes

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

- starting array has 1, 1
- while loop (newFib.length < 1000 digits)
  - capture last two nums in array
  - newFib = last two nums
  - push newFib to array
- test length of newFib
  - if newFib length === 1000 > return index of newFib
