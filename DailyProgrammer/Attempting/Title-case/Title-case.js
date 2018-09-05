// ===================================
// Challenge #76 [Easy]: Title case - Solution
// ===================================

function titleCase(string, exceptionsArr) {
  // split the string on empty spaces and place into array
  // second example has lowercase letter in originally uppercase words

  let titleArr = string.toLowerCase().split(" ");

  // loop through words in titleArr

  titleArr.forEach(
    // for each word in titleArr...
    function(currWord, index) {
      // take the first letter
      let firstLetter = currWord[0];

      // if it's the first word...
      if (index === 0) {
        // ...capitalize the first letter.
        firstLetter.toUpperCase();
      }
      // For all other words...
      else {
        // ...if currWord is NOT in the exceptionsArr...
        if (exceptionsArr.indexOf(currWord) === -1) {
          // ...capitalize the first letter of that word...
          firstLetter.toUpperCase();
        }
        // ...otherwise leave it alone and move on to the next word.
      }
    }
  );
  // return modified words as a string with spaces in between each
  console.log(titleArr.join(" "));
}

titleCase("the quick brown fox jumps over the lazy dog", [
  "jumps",
  "the",
  "over"
]);
// titlease("THE vitamins ARE IN my fresh CALIFORNIA raisins", exceptions);
// => [CORRECT]
