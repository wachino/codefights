function messageFromBinaryCode(code) {
  return code.match(/[01]{8}/g).map((b)=>String.fromCharCode(Number('0b'+b))).join('')
}
