function matrixElementsSum(matrix) {
    return matrix.map((line,j) => line.map((el, i)=> (matrix.slice(0,j).every(l=>l[i]!==0))?el:0)).reduce((a,b)=>a+b.reduce((c,d)=>c+d),0);
}
