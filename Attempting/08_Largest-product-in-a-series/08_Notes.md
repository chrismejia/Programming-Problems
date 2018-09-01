# 08 - Notes

The problem is asking us to check which 13-digit substring of the original
1000-digit number produces the largest multiple.

I think that we can do a couple of things:

- break the string into an array.
- set up a maxValue holder to compare all values against
- set up a for loop to advance the start index
- grab a 13-char slice of the array
- if that slice DOES NOT contain a 0 (12 numbers x 0 = 0, avoids extra calculation)
  - array.reduce it to compare against the maxValue
- return the largest product
