function arrayMaximalAdjacentDifference(inputArray) {
    var max = Math.abs(inputArray[1] - inputArray[0]);
    for(var i=2; i < inputArray.length; i++) {
        if(Math.abs(inputArray[i] - inputArray[i-1]) > max) {
            max = Math.abs(inputArray[i] - inputArray[i-1]);
        }
    }
    return max
}
