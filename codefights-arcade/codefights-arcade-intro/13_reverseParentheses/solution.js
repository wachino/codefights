function reverseParentheses(s) {
    var exp = /\([^()]+\)/;
    while (exp.test(s)) {
        s = s.replace(exp, (r) => r.split('').slice(1,-1).reverse().join(''));
    }
    return s;
    
}
