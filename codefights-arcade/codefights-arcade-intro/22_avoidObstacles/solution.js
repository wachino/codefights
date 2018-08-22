function avoidObstacles(inputArray) {
    var max =Math.max(...inputArray);
    for (var i = 1; i< max; i++) {
        var divs = inputArray.some(x=>x%i==0)
        if(!divs) return i;
    }
    return max +1;
}
