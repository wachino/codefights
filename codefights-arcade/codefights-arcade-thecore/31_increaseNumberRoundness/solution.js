function increaseNumberRoundness(n) {
  return (
    String(
      Number(
        String(n)
          .split("")
          .reverse()
          .join("")
      )
    ).indexOf("0") >= 0
  );
}
