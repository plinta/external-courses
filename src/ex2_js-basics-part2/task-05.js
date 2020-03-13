function showMostNumber(randomArr){
    let helper = 0;
    for(let i=0; i<randomArr.length; i++){
    if(randomArr[helper] <= randomArr[i]){
    helper = i;}
    }
    return randomArr[helper];
    }