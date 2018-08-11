function arrayChange(inputArray) {
    var max = inputArray[0];
    var moves = 0;
    for(var i = 1; i < inputArray.length; i++) {
        if (inputArray[i] <= max) {
            moves += max - inputArray[i] + 1;
            inputArray[i] = max + 1;
        }
        max = inputArray[i]
    }
    return moves
}
