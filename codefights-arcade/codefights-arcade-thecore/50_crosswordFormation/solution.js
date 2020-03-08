function crosswordFormation(words) {
  var permutations = permute(words);
  return permutations.reduce((acc, p) => acc + countSolutions(p), 0);
}

function countSolutions(words) {
  var count = 0;
  for (var i = 0; i < words[0].length; i++) {
    var j = words[1].indexOf(words[0][i]);
    while (j >= 0) {
      for (var k = i + 2; k < words[0].length; k++) {
        var l = words[2].indexOf(words[0][k]);
        while (l >= 0) {
          for (var m = j + 2; m < words[1].length; m++) {
            var n = words[3].indexOf(words[1][m])
            while (n >= 0) {
              if (words[3].length - n > k - i &&
                words[2].length - l > m - j &&
                words[3][k - i + n] == words[2][m - j + l]) {
                count++;
              }
              n = words[3].indexOf(words[1][m], n + 1)
            }
          }
          var l = words[2].indexOf(words[0][k], l + 1);
        }
      }

      j = words[1].indexOf(words[0][i], j + 1);
    }
  }
  return count;
}

var permArr = [];
var usedWords = [];
function permute(input) {
  var i, w;
  for (i = 0; i < input.length; i++) {
    w = input.splice(i, 1)[0];
    usedWords.push(w);
    if (input.length == 0) {
      permArr.push(usedWords.slice());
    }
    permute(input);
    input.splice(i, 0, w);
    usedWords.pop();
  }
  return permArr
};
