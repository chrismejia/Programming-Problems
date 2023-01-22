/**
 * @see {@link https://leetcode.com/problems/is-subsequence/?envType=study-plan&id=level-1 392. Is Subsequence}
 */

/**
 * EXPLAIN
 * A subsequence is defined as where letters is s occur in t in the order that they appear in s
 * so s = "abc", t = "ahbgdc" === true, because a appears before b appears before c appears
 *
 * all lowercase
 * CASE?: s = "abc", t = "abac" === true! b/c you can delete second "a"
 */

/**
 * APPROACH
 *
 * create placeholder string to collect matches
 * one pointer at start of s
 * one pointer at start of t
 *
 * LOOP through t
 *    grab curr char
 *    IF curr char matches pointer char of s
 *      YES   add curr char to placeholder string
 *            advance s pointer
 *            advance t pointer
 *      NO    ONLY advance t pointer
 * END LOOP
 *
 * IF placeholder length === length of s
 *    YES   return true
 *    NO    return false
 */

/**
 * ORIGINAL CODE: ACCEPTED
 * SPEED:   71ms - 59%
 * MEMORY:  42MB - 59%
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // Track order of matching subsequence
  let match = "";

  // Starting index of s
  let sPoint = 0;

  // Loop through t
  for (let tPoint = 0; tPoint < t.length; tPoint++) {
    // Grab both chars; s at its index, t at curr loop index
    const tChar = t[tPoint];
    const sChar = s[sPoint];

    // If both chars match, add char to match string
    if (tChar === sChar) {
      match += tChar;
      sPoint++;
    }
    // not equal; do nothing, just advance to next char in t
  }

  // Compare lengths
  // if equal:      s is a subsequence of t
  // if not equal:  s is NOT a subsequence of t
  if (match.length === s.length) {
    return true;
  }

  return false;
};

/**
 * 2ND CODE - no match string; only integers
 * SPEED:   78ms - 43%
 * MEMORY:  41MB - 99%
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // Starting index of s
  let sPoint = 0;

  // Loop through t
  for (let tPoint = 0; tPoint < t.length; tPoint++) {
    // Grab both chars; s at its index, t at curr loop index
    const tChar = t[tPoint];
    const sChar = s[sPoint];

    // If both chars match, increment s pointer
    if (tChar === sChar) {
      sPoint++;
    }
    // not equal; do nothing, just advance to next char in t
  }

  // Compare pointer count to s length
  // if equal:      s is a subsequence of t
  // if not equal:  s is NOT a subsequence of t
  if (sPoint === s.length) {
    return true;
  }

  return false;
};

/**
 * 3RD CODE: add base cases
 * SPEED:   54ms - 98%
 * MEMORY:  41.9MB - 59%
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // BASE CASES
  // s cannot be longer than t
  if (s.length > t.length) return false;

  // s and t are same length, but not same strings
  if (s.length === t.length && s !== t) return false;

  // Starting index of s
  let sPoint = 0;

  // Loop through t
  for (let tPoint = 0; tPoint < t.length; tPoint++) {
    // Grab both chars; s at its index, t at curr loop index
    const tChar = t[tPoint];
    const sChar = s[sPoint];

    // If both chars match, increment s pointer
    if (tChar === sChar) {
      sPoint++;
    }
    // not equal; do nothing, just advance to next char in t
  }

  // Compare pointer count to s length
  // if equal:      s is a subsequence of t
  // if not equal:  s is NOT a subsequence of t
  if (sPoint === s.length) {
    return true;
  }

  return false;
};

/**
 * READ       02:10
 * EXPLAIN    04:52   07:02
 * APPROACH   13:44   20:47
 * CODE       04:45   25:33
 * TEST       00:17   25:51
 * OPTIMIZE   14:40   40:32
 */
