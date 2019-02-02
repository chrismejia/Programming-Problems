function sum(n, s = 0) {
  if (n === 0) {
    return s;
  } else {
    return sum(Math.floor(n / 10), (n % 10) + s);
  }
}

function persistence(n, c = 0) {
  if (n > 9) {
    return persistence(sum(n), ++c);
  } else {
    return c;
  }
}
