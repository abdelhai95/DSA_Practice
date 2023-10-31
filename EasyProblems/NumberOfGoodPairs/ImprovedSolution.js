const pairsCounter = function(numberOfApperances){
    let pairsNumber  = 0;
    for(let i = numberOfApperances - 1; i > 0; i--){
        pairsNumber = numberOfApperances - i + pairsNumber;
    }

    return pairsNumber;
}




const NumberOfGoodPairs = function(arr) {

    let apperancesCounter = {};
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        if(apperancesCounter[arr[i]]){
            apperancesCounter[arr[i]]++;
        } else {
            apperancesCounter[arr[i]] = 1;
        }
    }

    const values = Object.values(apperancesCounter); 

    //Can I filter the object by values more than one
for (const value of values) {
    if(value > 1) {
        let pairsNumber = pairsCounter(value);
        count += pairsNumber;
    } 
}


return count;

};


NumberOfGoodPairs([1,2,3]);