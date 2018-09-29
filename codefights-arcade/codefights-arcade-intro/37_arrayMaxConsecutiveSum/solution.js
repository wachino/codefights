function arrayMaxConsecutiveSum(inputArray, k) {

    var max = inputArray.slice(0,k).reduce((a,b)=>a+b);
    var cur = max;
    for(var i = k; i < inputArray.length; i++) {
        cur = cur + inputArray[i] - inputArray[i-k];
        if(cur>max)
            max = cur
    }
    return max
}
