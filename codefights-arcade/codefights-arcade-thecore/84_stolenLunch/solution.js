function stolenLunch(note) {
  return note.replace(/\d|[a-j]/g, function (char) {
    if (char >= "a" && char <= "j") {
      return String.fromCharCode(char.charCodeAt(0) - 'a'.charCodeAt(0) + '0'.charCodeAt(0));
    } else {
      return String.fromCharCode(char.charCodeAt(0) - '0'.charCodeAt(0) + 'a'.charCodeAt(0));
    }
  });
}
