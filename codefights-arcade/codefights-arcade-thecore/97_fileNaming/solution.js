function fileNaming(names) {
  var newNames = [];
  while (names.length) {
    var i = 0;
    var name = names.shift();
    while (newNames.includes(name + (i ? "(" + i + ")" : ""))) {
      i++;
    }
    newNames.push(name + (i ? "(" + i + ")" : ""));
  }
  return newNames;
}
