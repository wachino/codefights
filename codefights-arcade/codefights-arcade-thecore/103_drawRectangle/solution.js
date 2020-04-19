function drawRectangle(canvas, rectangle) {
  canvas[rectangle[1]][rectangle[0]] = "*";
  canvas[rectangle[3]][rectangle[2]] = "*";
  canvas[rectangle[1]][rectangle[2]] = "*";
  canvas[rectangle[3]][rectangle[0]] = "*";
  for (var i = rectangle[0] + 1; i < rectangle[2]; i++) {
    canvas[rectangle[1]][i] = "-";
    canvas[rectangle[3]][i] = "-";
  }
  for (var i = rectangle[1] + 1; i < rectangle[3]; i++) {
    canvas[i][rectangle[0]] = "|";
    canvas[i][rectangle[2]] = "|";
  }
  return canvas;
}
