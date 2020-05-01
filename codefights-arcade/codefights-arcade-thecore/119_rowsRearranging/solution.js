function rowsRearranging(matrix) {
  var isPosible = true;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      if (i != j) {
        isPosible =
          isPosible &&
          (matrix[i].every((el, id) => el > matrix[j][id]) ||
            matrix[i].every((el, id) => el < matrix[j][id]));
      }
    }
  }

  return isPosible;
}
