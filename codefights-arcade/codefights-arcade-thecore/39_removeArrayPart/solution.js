function removeArrayPart(inputArray, l, r) {
  inputArray.splice(l, r - l + 1);
  return inputArray;
}
