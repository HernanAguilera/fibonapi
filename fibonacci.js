'use strict'


function previousNumber(num, start=0, next=null){
    if (!Number.isInteger(num)){
        throw 'Error'
    }
    if (num<0){
        return 0;
    }
    if (start==0){
        next = 1;
    }
    if (next > num)
        return start;
    
    return previousNumber(num, next, start+next);
}

module.exports = {
    previousNumber
}