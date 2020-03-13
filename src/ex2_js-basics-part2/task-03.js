function serchingNumber(countNumber){
    let forEven = 0;
    let forUneven = 0;
    let numberZero = 0;
        for(let i=0; i<countNumber.length; i++){
            if(typeof(countNumber[i]) !== 'number'){
                continue;
            }
            else if(countNumber[i] === 0){
        numberZero = numberZero + 1;}
            else if (countNumber[i] % 2 === 0) {
        forEven = forEven + 1;}
            else if (countNumber[i] % 2 === 1) {
        forUneven = forUneven + 1; }
    }
        return[forEven, forUneven, numberZero]
    }

    module.exports = serchingNumber;