function uniqueDigitProducts(a) {
  return a
    .map((el) =>
      String(el)
        .split("")
        .map(Number)
        .reduce((b, c) => b * c, 1)
    )
    .filter((el, id, arr) => id === arr.indexOf(el)).length;
}
