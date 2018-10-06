function knapsackLight(value1, weight1, value2, weight2, maxW) {

    var ret = 0;
    if(value1 >value2 ) {
        if( weight1<= maxW){
            ret += value1;
            maxW -= weight1
        }
        if( weight2<= maxW){
            ret += value2;
            maxW -= weight2
        }
    }else {
        if( weight2<= maxW){
            ret += value2;
            maxW -= weight2
        }
        if( weight1<= maxW){
            ret += value1;
            maxW -= weight1
        }
    }
    return ret;
}
