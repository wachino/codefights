function contoursShifting(matrix) {
  var maxC = Math.floor((Math.min(matrix.length, matrix[0].length) + 1) / 2);
  var q = [];
  var next;
  for (var i = 0; i < maxC; i++) {
    var it = contourIterator(i);
    next = it.next();
    while (!next.done) {
      q.push(matrix[next.value[0]][next.value[1]]);
      next = it.next();
    }
    if (i % 2) {
      q = q.slice(1).concat(q.slice(0, 1));
    } else {
      q = q.slice(-1).concat(q.slice(0, -1));
    }
    it = contourIterator(i);
    next = it.next();
    while (q.length) {
      matrix[next.value[0]][next.value[1]] = q.shift();
      next = it.next();
    }
  }

  return matrix;

  function* contourIterator(contour) {
    var directions = [
      ([i, j]) => [i, j + 1],
      ([i, j]) => [i + 1, j],
      ([i, j]) => [i, j - 1],
      ([i, j]) => [i - 1, j],
    ];
    var startPos = [contour, contour];
    var curPos = [contour, contour];
    var curDirIndex = 0;
    var curDir = directions[curDirIndex];
    var nextPos = [];
    while (nextPos[0] != startPos[0] || nextPos[1] !== startPos[1]) {
      yield curPos;
      nextPos = curDir(curPos);
      if (
        nextPos[0] < contour ||
        nextPos[1] < contour ||
        nextPos[0] >= matrix.length - contour ||
        nextPos[1] >= matrix[0].length - contour
      ) {
        curDirIndex = (curDirIndex + 1) % 4;
        curDir = directions[curDirIndex];
        nextPos = curDir(curPos);
      }
      if (
        nextPos[0] < contour ||
        nextPos[1] < contour ||
        nextPos[0] >= matrix.length - contour ||
        nextPos[1] >= matrix[0].length - contour
      ) {
        break;
      }
      curPos = nextPos;
    }
  }
}
