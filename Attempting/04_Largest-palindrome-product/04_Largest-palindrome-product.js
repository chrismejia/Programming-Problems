//===================================
// My Idea
//===================================
// Palindrome constructor will be a hell of a problem.

// We can start by defining an upperBound; 999 x 999, which = 998001. We can further this and define a lowerBound; 100 x 100 which = 10000. So that means that;

// Largest Palindrome for two 3-digit numbers: 10000 < answerPalindrome < 998001.

// We can further narrow the search by removing non-palindromic numbers from that set above. We can construct the first by finding largestPalindrome < 998001: 997799. We will have to construct palindromes starting with 997799 and moving to the next, 996699, and so on. A pattern to calculate palindromes down from 997799 emerges:

// We can imagine the currentPalindrome as a string

//[012345]// Value indexes
// 123321 // somePalindrome
// 456654 // diffPalindrome

// Pattern 1
////////////

// When progressing through the thousand and hundred digits, the [2] and [3] values, the palindrome is subtracting 1100 each time:

// 997799 // First palindrome under 998001; (999 x 999).
// 996699 // Change (-1100)
// 995599 // Change (-1100)
//   ..
//   ..

//[012345]              [012345]
// 991199 // (-1100)  |  --11--  // (-1100)
// 990099 // (-1100)  |  --00--  // (-1100)

// Pattern 2
////////////

// When the [2] and [3] values are = 0, they'll loop back up to 9; [1] and [4] values will decrement down to 8, 7, 6, etc... This follows a pattern too.

//[012345]              [012345]
// 990099            |   -9009-
// 989989 // (-110)  |   -8998- // (-110)

// -9009-
// -8998- // Change (-110)

// From here, repeat pattern 1 to keep getting palindromes

// 989989
// 988889 // -1100
//   ..
//   ..
// 981189
// 980089 // -1100
// ------ // Here comes pattern 2
// 979979 // -110
// ------ // Back to pattern 1
// 978879 // -1100

// Pattern 3
////////////

// This pattern is for the [0] and [5] values and is the least frequent of the changes until/if we get to five digits at which point it'll change again to address the mirroring of 5-digit numbers.

//[012345]
// 900009
// 899998 // (-11)

//===================================
// My Solution
//===================================
