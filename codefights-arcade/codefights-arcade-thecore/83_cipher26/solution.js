function cipher26(message) {
  var original = [];
  var sum = 0;
  var nextChar;
  for (var i = 0; i < message.length; i++) {
    nextChar = (message[i].charCodeAt(0) - 'a'.charCodeAt(0) + 26 - sum) % 26;
    original.push(nextChar);
    sum = (sum + nextChar) % 26;
  }
  return original.map(c => String.fromCharCode(c + 'a'.charCodeAt(0))).join('');
}
