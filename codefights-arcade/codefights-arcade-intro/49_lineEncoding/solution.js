function lineEncoding(s) {
    return s.replace(/([a-z])\1*/g, (it)=>(it.length>1?it.length + it[0]: it[0]))
}
