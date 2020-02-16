function secondRightmostZeroBit(n) {
  return (
    1 <<
    (n.toString(2).length -
      n.toString(2).lastIndexOf("0", n.toString(2).lastIndexOf("0") - 1) -
      1)
  );
}
