function arrayConversion(inputArray) {
  var tmp = [];
  var j = 0;
  while (inputArray.length > 1) {
    tmp = [];
    for (var i = 0; i < inputArray.length; i += 2) {
      tmp.push(inputArray.slice(i, i + 2));
    }
    inputArray = tmp.map(pair => (j ? pair[0] * pair[1] : pair[0] + pair[1]));
    j = (j + 1) % 2;
  }
  return inputArray[0];
}
