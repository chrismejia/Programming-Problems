// ===================================
// All String Combinations - Solution
// ===================================

const stringCombinations = string => {
  let combinations = [];

  let letters = string.split("");

  for (let firstLetter = 0; firstLetter <= letters.length; firstLetter++) {
    for (
      let endLetter = firstLetter + 1;
      endLetter <= letters.length;
      endLetter++
    ) {
      let currWord = letters.slice(firstLetter, endLetter).join("");
      combinations.push(currWord);
    }
  }
  return combinations.join(", ");
};

stringCombinations("dog");
// => 'd, do, dog, o, og, g' [CORRECT]
