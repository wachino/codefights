function sumUpNumbers(inputString) {
    return (inputString.match(/\d+/g)||[]).map(Number).reduce((a,b)=>a+b,0)
}
