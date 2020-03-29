function houseNumbersSum(inputArray) {
  var sum = 0;

  for (var i = 0; inputArray[i] != 0; sum += inputArray[i++]);

  return sum;
}
