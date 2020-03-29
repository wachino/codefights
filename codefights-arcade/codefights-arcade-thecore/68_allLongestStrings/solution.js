function allLongestStrings(inputArray) {
  var maxLength = Math.max(...inputArray.map(s => s.length));
  return inputArray.filter(s => s.length === maxLength);
}
