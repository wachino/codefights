function areIsomorphic(array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every((row, i) => row.length === array2[i].length)
  );
}
