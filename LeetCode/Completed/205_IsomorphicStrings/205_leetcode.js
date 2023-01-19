/**
 * @see {@link https://leetcode.com/problems/isomorphic-strings/?envType=study-plan&id=level-1 205. Isomorphic Strings}
 */

/**
 * EXPLAIN
 * Isomorphic means ONLY key to one value
 * In this case, one letter can be mapped to only one letter (self-map ok)
 *
 * s = "egg", t = "add"
 * > IS isomorphic: e -> a, g -> d
 *
 * s = "foo", t = "bar"
 * > IS NOT isomorphic, two unique letters in s, three in t, not uniquely paired
 *
 * EXTRA EXAMPLE:
 *
 * s = "baby", t = "fool"
 * > IS NOT isomorphic, three unique letters in both, BUT order NOT preserved
 */

/**
 * APPROACH
 *
 * create blank map
 *
 * both same string length ? return false
 *
 * LOOP through both words same time
 *    check to see if map has string 1 letter mapped
 *      NO:   set string 1 letter to string 2 letter
 *      YES:  does string 1 letter key have string 2 letter value
 *            NO: return false
 * END LOOP
 *
 * made it out of loop; return true
 */

/**
 * ORIGINAL CODE
 * SPEED: 67ms - 97%
 * MEMORY: 46.2MB - 22%
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // Both strings need the same number of unique letters for this to work.
  const firstLetters = new Set(s);
  const secondLetters = new Set(t);
  if (firstLetters.size !== secondLetters.size) {
    return false;
  }

  const letterMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const key = s[i];
    const val = t[i];

    if (!letterMap.has(key)) {
      letterMap.set(key, val);
    } else if (letterMap.get(key) !== val) {
      return false;
    }
  }
  return true;
};

/**
 * Same code, but using an object instead of a Map
 * SPEED: 78ms - 80%
 * MEMORY: 46MB - 23%
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // Both strings need the same number of unique letters for this to work.
  const firstUniques = new Set(s);
  const secondUniques = new Set(t);
  if (firstUniques.size !== secondUniques.size) {
    return false;
  }

  // Can be a regular object b/c insertion order doesn't matter.
  const letterMap = {};

  // Loop through both strings at same time
  for (let i = 0; i < s.length; i++) {
    const key = s[i];
    const val = t[i];

    // IF key does not exist
    //   set key to val
    // ELSE IF existing val for key does not equal current val
    //   return false
    if (!letterMap.hasOwnProperty(key)) {
      letterMap[key] = val;
    } else if (letterMap[key] !== val) {
      return false;
    }
  }
  // made it out of the loop without triggering a false
  // strings ARE isomorphic
  return true;
};

/**
 * COMPLEXITY
 * TIME: O(N); to loop through the strings once for Set creation, then key checking
 * SPACE: O(N): size of Sets and key-value pairs of map object is dependent on string length
 */

/**
 * READ       01:24
 * EXPLAIN    02:29   03:53
 * APPROACH   08:09   12:03
 * CODE       04:39   16:52
 * TEST       11:08   28:00
 * OPTIMIZE   08:51   36:51
 */
