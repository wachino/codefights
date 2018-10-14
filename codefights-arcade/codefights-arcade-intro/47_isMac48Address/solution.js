function isMAC48Address(inputString) {
    var arr = inputString.split('-');
    return arr.length == 6 && arr.every((a)=>/^[A-F0-9]{2}$/.test(a));
}
