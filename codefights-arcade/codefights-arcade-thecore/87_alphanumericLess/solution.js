function alphanumericLess(s1, s2) {
  var regex = /[a-zA-Z]|\d+/g;
  var tokens1 = s1.match(regex);
  var tokens2 = s2.match(regex);
  var diffLengths = tokens1.length !== tokens2.length;

  for (var i = 0; i < Math.max(tokens1.length, tokens2.length); i++) {
    if (diffLengths) {
      if (i === tokens1.length) {
        return true;
      }
      if (i === tokens2.length) {
        return false;
      }
    }
    if (/\d+/.test(tokens1[i]) && /\d+/.test(tokens2[i])) {
      var n1 = /^0*(\d+)$/.exec(tokens1[i])[1];
      var n2 = /^0*(\d+)$/.exec(tokens2[i])[1];
      if (n1 !== n2) {
        return n1 < n2;
      }
    } else if (tokens1[i] !== tokens2[i]) {
      return tokens1[i] < tokens2[i];
    }
  }

  for (var i = 0; i < tokens1.length; i++) {
    if (/\d+/.test(tokens1[i]) && /\d+/.test(tokens2[i])) {
      var leadingZeros1 = /^[0]+/.exec(tokens1[i]) && /^[0]+/.exec(tokens1[i])[0].length || 0;
      var leadingZeros2 = /^[0]+/.exec(tokens2[i]) && /^[0]+/.exec(tokens2[i])[0].length || 0;

      if (leadingZeros1 !== leadingZeros2) {
        return leadingZeros1 > leadingZeros2;
      }
    }
  }

  return false;
}
