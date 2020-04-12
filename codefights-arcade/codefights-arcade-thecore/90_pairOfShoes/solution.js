function pairOfShoes(shoes) {
  var pos;
  var shoe;
  while (shoes.length) {
    shoe = shoes.pop();
    if (
      (pos = shoes.findIndex(
        ([type, size]) => size === shoe[1] && type === 1 - shoe[0]
      )) >= 0
    ) {
      shoes.splice(pos, 1);
    } else {
      return false;
    }
  }
  return true;
}
