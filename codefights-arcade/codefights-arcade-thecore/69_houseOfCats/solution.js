function houseOfCats(legs) {
  var ret = [];
  for (var i = Math.floor((legs % 4) / 2); i <= Math.floor(legs / 2); i += 2) {
    ret.push(i);
  }
  return ret;
}
