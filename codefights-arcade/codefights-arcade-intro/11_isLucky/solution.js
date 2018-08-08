function isLucky(n) {
    return String(n).split('').map(Number).reduce((a,b)=>a+b)/2 === String(n).split('').slice(0,String(n).length/2).map(Number).reduce((a,b)=>a+b)
}
