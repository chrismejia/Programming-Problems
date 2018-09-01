// My Idea
//-----------------------------------

// Have one for loop 1->100
// addThenSquare and squareThenAdd
// return (addThenSquare - squareThenAdd);

// My Solution
//-----------------------------------

const sumSquareDiff = maxNum => {
  let addThenSquare = 0;
  let squareThenAdd = 0;

  for (let i = 1; i <= maxNum; i++) {
    let currNum = i;

    addThenSquare += currNum; //square this at end of for loop
    squareThenAdd += Math.pow(currNum, 2);
  }
  return Math.pow(addThenSquare, 2) - squareThenAdd;
};

// sumSquareDiff(100); //=> 25164150 [Correct]
