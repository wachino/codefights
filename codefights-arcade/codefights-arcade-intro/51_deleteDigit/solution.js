function deleteDigit(n) {
    var s = String(n).split('').map(Number)
    return Math.max(...s.map((el,i)=>{var r = s.slice(); r.splice(i,1); return Number( r.join(''))}))
}
