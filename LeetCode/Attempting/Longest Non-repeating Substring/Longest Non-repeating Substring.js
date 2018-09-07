// ===================================
// Longest Non-repeating Substring - Solution
// ===================================

function longestNonRepeatingSubString(string) {
  debugger;
  // default case: if all chars in string are the same, len = 1
  let subStr = "";
  let subStrLen = 1;

  // loop over string
  for (let i = 0; i < string.length; i++) {
    // take the currCharacter and assign for use as first char in test subStr
    let firstChar = string[i];

    // if the length of the remaining substring to test is SHORTER than subStrLen...
    if (string.substring(i).length < subStrLen) {
      // end the loop
      // no way for remaining substring to produce longer non-repeating string
      break;
    }

    for (let j = i + 1; j < string.length; j++) {
      // take the current char and set as next char to test in subStr
      let nextChar = string[j];

      // 3 CASES
      // ===============================================================
      // #1 - if holder string is empty...
      if (subStr === "") {
        // ...add the firstChar to it.
        subStr += firstChar;
      }

      // #2 - holder string isn't empty; if nextChar doesn't exist in subStr
      if (subStr.indexOf(nextChar) === -1) {
        subStr += nextChar;
      }

      // #3 - holder string contains nextChar
      else {
        // if the current subStr.length is longer than the...
        if (subStr.length > subStrLen) {
          // ...set subStr.length to global subStrLen
          subStrLen = subStr.length;
        }
        // prep for next subStr tests
        // reset subStr
        subStr = "";
        // this loop ends at either a repeat OR the end of the string so...
        break;
      }
    }
  }
  // return longest non-repeating substring length
  return subStrLen;
}

// longestNonRepeatingSubString("abcabcbb"); => 3 [CORRECT]
// longestNonRepeatingSubString("bbbbb"); => 1 [CORRECT]
// longestNonRepeatingSubString("pwwkew"); => 3 [CORRECT]
