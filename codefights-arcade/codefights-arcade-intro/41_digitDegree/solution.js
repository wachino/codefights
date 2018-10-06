function digitDegree(n) {
    if (n<10)
        return 0;
    return 1 + digitDegree(Number(String(n).split('').map(Number).reduce((a,b)=>a+b)));
}
