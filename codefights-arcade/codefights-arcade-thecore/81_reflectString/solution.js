function reflectString(inputString) {
  return inputString.split('').map(c => String.fromCharCode('z'.charCodeAt(0) - c.charCodeAt(0) + 'a'.charCodeAt(0))).join('');
}
