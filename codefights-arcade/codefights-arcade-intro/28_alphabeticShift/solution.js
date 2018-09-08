function alphabeticShift(inputString) {
    return inputString.split('').map(c=>c.charCodeAt(0)=== 122?'a':String.fromCharCode(c.charCodeAt(0)+1)).join('');
}
