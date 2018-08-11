function palindromeRearranging(inputString) {
    var odd = 0;
    var arr = inputString.split('');
    var el;
    var pos;
    while (arr.length) {
        el = arr.pop();
        pos = arr.indexOf(el);
        if (pos <0) {
            odd++;
        } else {
            arr.splice(pos,1);
        }
    }
    
    return odd <2;
}
