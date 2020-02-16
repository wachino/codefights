function equalPairOfBits(n, m) {
  return (
    1 <<
    (
      (n ^ m)
        .toString(2)
        .split("")
        .reverse()
        .join("") + "0"
    ).indexOf("0")
  );
}
