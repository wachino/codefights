function christmasTree(levelNum, levelHeight) {
  var maxWidth = 5 + (levelHeight + levelNum - 2) * 2;
  var tree = [];
  var crown = [
    " ".repeat((maxWidth - 1) / 2) + "*",
    " ".repeat((maxWidth - 1) / 2) + "*",
    " ".repeat((maxWidth - 3) / 2) + "***"
  ];
  var levels = [];
  var foot = [];

  for (var i = 0; i < levelNum; i++) {
    for (var j = 0; j < levelHeight; j++) {
      levels.push(
        " ".repeat(levelHeight - 1 - j + (levelNum - i - 1)) +
          "*".repeat(5 + 2 * (j + i))
      );
    }
    foot.push(
      " ".repeat((maxWidth - 1) / 2 - Math.floor(levelHeight / 2)) +
        "*".repeat(levelHeight + (levelHeight % 2 === 0 ? 1 : 0))
    );
  }

  var tree = crown.concat(levels, foot);
  return tree;
}
