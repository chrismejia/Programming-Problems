// ===================================
// Challenge #76 [Easy]: Title case - Solution
// ===================================

function titleCase(string, exceptionsArr) {
  // split the string on empty spaces and place into array
  // second example has lowercase letter in originally uppercase words

  let titleArr = string.toLowerCase().split(" ");
  let fixedTitle = [];

  // loop through words in titleArr
  for (let i = 0; i < titleArr.length; i++) {
    // For each word in titleArr...
    let currWord = titleArr[i];
    // ...take the first letter.
    let firstLetter = currWord[0];

    // if it's the first word...
    if (i === 0) {
      // ...capitalize the first letter and add on the rest of the word
      currWord = firstLetter.toUpperCase() + currWord.substring(1);
      fixedTitle.push(currWord);
    }

    // For all other words...
    // ...if currWord is in the exceptionsArr...
    else if (i !== 0 && exceptionsArr.indexOf(currWord) !== -1) {
      // ...capitalize the first letter of that word...
      fixedTitle.push(currWord);
    } else {
      currWord = firstLetter.toUpperCase() + currWord.substring(1);
      fixedTitle.push(currWord);
    }
    // ...otherwise leave it alone and move on to the next word.
  }
  // return modified words as a string with spaces in between each
  return fixedTitle.join(" ");
}

let exceptions = ["are", "is", "in", "your", "my"];
titleCase("THE vitamins ARE IN my fresh CALIFORNIA raisins", exceptions);
// => 'The Vitamins are in my Fresh California Raisins' [CORRECT]
