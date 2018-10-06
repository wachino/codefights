function longestDigitsPrefix(inputString) {
    for(var i = 0;  i < inputString.length; i++) {
        if(!/\d/.test(inputString[i]))
            break
    }
    return inputString.substring(0,i);
}
