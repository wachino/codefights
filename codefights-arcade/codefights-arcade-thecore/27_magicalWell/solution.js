function magicalWell(a, b, n) {
  return (
    a * b * n + ((a + b) * ((n - 1) * n)) / 2 + ((n - 1) * n * (2 * n - 1)) / 6
  );
}
