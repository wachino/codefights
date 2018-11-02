function longestWord(text) {
    var words = text.match(/\w+/g);
    
    var ml = Math.max(...words.map(el=>el.length))
    
    for(var i=0;i< words.length; i++){
        if(words[i].length == ml)
            return words[i]
    }
}
