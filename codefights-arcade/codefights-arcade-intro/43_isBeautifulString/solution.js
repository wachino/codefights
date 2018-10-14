function isBeautifulString(inputString) {
    return inputString.split('').sort().join('').replace(/([a-z])\1*/g,(it)=>it.length +',').split(',').slice(0,-1).map(Number).every((el,i,ar)=> (inputString.indexOf(String.fromCharCode(i+'a'.charCodeAt(0)))>=0 &&(i==0 || ar[i]<=ar[i-1])))
}
