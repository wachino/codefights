function addBorder(picture) {
  return [Array(picture[0].length + 2).fill('*').join('')]
    .concat(
      picture.map(r => '*' + r + '*'),
      [Array(picture[0].length + 2).fill('*').join('')]
    )
}
