function buildPalindrome(st) {
    var i = 0;
    var aux;
    while(st != st.split('').reverse().join('')){
        aux = st.split('')
        aux.splice(st.length-i, 0 ,st[i])
        st = aux.join('');
        i++;
    }
    return st;
}