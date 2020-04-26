function correctNonogram(size, nonogramField) {
  var infoLength = Math.floor((size + 1) / 2);
  var correct = true;

  for (var i = infoLength; i < nonogramField.length; i++) {
    var row = [];
    var column = [];
    var nextC;
    var nextR;
    var k;
    var n;
    for (var j = 0; j < infoLength; j++) {
      nextC = nonogramField[j][i];
      nextR = nonogramField[i][j];
      if (nextC !== "-") {
        column.push(Number(nextC));
      }
      if (nextR !== "-") {
        row.push(Number(nextR));
      }
    }
    k = infoLength;
    while (correct && row.length) {
      n = row.shift();
      while (k < nonogramField.length && nonogramField[i][k] === ".") {
        k++;
      }
      if (
        n + k > nonogramField.length ||
        (n > 0 && k == nonogramField.length)
      ) {
        correct = false;
        break;
      }
      for (var h = 0; h < n; h++) {
        if (nonogramField[i][k] !== "#") {
          correct = false;
        }
        k++;
      }
      if (k !== nonogramField.length && nonogramField[i][k] === "#") {
        correct = false;
        break;
      }
    }
    while (correct && k < nonogramField.length) {
      if (nonogramField[i][k] === "#") {
        correct = false;
      }
      k++;
    }
    k = infoLength;
    while (correct && column.length) {
      n = column.shift();
      while (k < nonogramField.length && nonogramField[k][i] === ".") {
        k++;
      }
      if (
        n + k > nonogramField.length ||
        (n > 0 && k == nonogramField.length)
      ) {
        correct = false;
        break;
      }
      for (var h = 0; h < n; h++) {
        if (nonogramField[k][i] !== "#") {
          correct = false;
        }
        k++;
      }
      if (k !== nonogramField.length && nonogramField[k][i] === "#") {
        correct = false;
        break;
      }
    }
    while (correct && k < nonogramField.length) {
      if (nonogramField[k][i] === "#") {
        correct = false;
      }
      k++;
    }
    if (!correct) {
      break;
    }
  }

  return correct;
}
