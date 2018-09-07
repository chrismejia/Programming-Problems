# Longest Non-repeating Substring - Notes

### Solution contains these notes line-by-line

### Idea

default global values to update:

- subStrLen = 1
- subStr = ""

create two loops -- one nested in the other

- pull first char from first loop
- pull subsequent chars from second loop

#### 3 cases here

1. the test string is empty

- add the first char

2. the test string IS NOT empty; nextChar DOES NOT exist in subStr

- add to testString

3. the test string IS NOT empty; nextChar DOES exist in subStr

- test subStr.length vs. global subStrLen
  - if subStr.length longer
    - assign global to current subStr.length
- reset subStr to ""
- break; out of second loop - advance firstChar index, loop again

return subStrLen
