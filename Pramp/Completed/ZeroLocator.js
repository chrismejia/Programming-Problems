let arr = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
];

function zeroLocator(array) {
  let topLeft = [];
  let bottomRight = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        if (topLeft.length === 0) {
          topLeft = [i, j];
        }
        bottomRight = [i, j];
      }
    }
  }
  console.log(topLeft, bottomRight);
  return [topLeft, bottomRight];
}

zeroLocator(arr);
