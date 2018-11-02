function digitsProduct(product) {
    for(var i = 1; i<5000; i++) {
        if(p(i) === product)return i;
    }
    function p (k) {
        return String(k).split('').map(Number).reduce((a,b)=>a*b,1)
    }
    return -1;
}
