function alternatingSums(a) {
    return [a.filter((el,i)=>i%2===0).reduce((b,c)=>b+c,0), a.filter((el,i)=>i%2!==0).reduce((b,c)=>b+c,0)];
}
