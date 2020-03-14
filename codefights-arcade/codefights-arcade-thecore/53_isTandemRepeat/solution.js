function isTandemRepeat(inputString) {
  var l = inputString.length;
  return (
    l % 2 === 0 && inputString.substr(0, l / 2) === inputString.substr(l / 2)
  );
}
