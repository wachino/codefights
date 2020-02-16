function swapAdjacentBits(n) {
  return parseInt(
    ((n.toString(2).length % 2 ? "0" : "") + n.toString(2))
      .match(/\d{2}/g)
      .map(el =>
        el
          .split("")
          .reverse()
          .join("")
      )
      .join(""),
    2
  );
}
