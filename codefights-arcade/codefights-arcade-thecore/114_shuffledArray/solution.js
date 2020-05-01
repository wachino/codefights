function shuffledArray(shuffled) {
  var sum = shuffled.reduce((a, b) => a + b);
  var i = shuffled.indexOf(sum / 2);
  shuffled.splice(i, 1);
  return shuffled.sort((a, b) => a - b);
}
