function pawnRace(white, black, toMove) {
  var w = 8 - Number(white[1]);
  w -= white[1] === "2";
  var b = Number(black[1]) - 1;
  b -= black[1] == "7";
  if (
    Number(white[1]) >= Number(black[1]) ||
    Math.abs(white[0].charCodeAt(0) - black[0].charCodeAt(0)) > 1
  ) {
    if (w === b) return toMove == "w" ? "white" : "black";
    return w < b ? "white" : "black";
  }
  if (white[0] == black[0]) return "draw";
  if (white[1] == "2" && black[1] == "7")
    return toMove == "b" ? "white" : "black";
  if (white[1] != "2" && black[1] != "7")
    return ((Number(black[1]) - Number(white[1])) & 1) ^ (toMove == "b")
      ? "white"
      : "black";
  if (white[1] == "3" && black[1] == "7") return "black";
  if (white[1] === "2" && black[1] === "6") return "white";
  if (Math.abs(Number(white[1]) - Number(black[1])) & 1)
    return toMove == "w" ? "white" : "black";
  return toMove == "b" ? "white" : "black";
}
