function countComparison(randomArr){
    for(let i=0; i<randomArr.length; ++i){
        if(randomArr[0] === randomArr[i]) continue;
        else 
        { return false}  
    }
    return true;
}
module.exports = countComparison;