function sortByLength(inputArray) {
  const copy = inputArray.map((el, i) => [el, i]);
  return copy
    .sort((a, b) =>
      a[0].length !== b[0].length ? a[0].length - b[0].length : a[1] - b[1]
    )
    .map((el) => el[0]);
}
