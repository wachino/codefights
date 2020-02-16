function differentRightmostBit(n, m) {
  return (
    1 <<
    (n ^ m)
      .toString(2)
      .split("")
      .reverse()
      .join("")
      .indexOf("1")
  );
}
