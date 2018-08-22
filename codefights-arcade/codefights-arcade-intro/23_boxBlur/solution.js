function boxBlur(im) {
    
    var im2 = im.slice().map(l=>l.slice());
    for (var i = 1; i < im.length - 1; i++) {
        for (var j = 1; j < im[0].length - 1; j++) {
            var sum = im.slice(i-1,i+2).reduce((acc,l)=>acc + l.slice(j-1,j+2).reduce((a,b)=>a+b),0);
            im2[i][j] = Math.floor(sum/9);
        }
    }
    im2.pop();
    im2.shift();
    im2.forEach(l=>{l.pop(); l.shift()})
    return im2;
}
