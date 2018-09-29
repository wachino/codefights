function extractEachKth(inputArray, k) {
    return inputArray.filter((el,i) => (i+1)%k!==0)
}
