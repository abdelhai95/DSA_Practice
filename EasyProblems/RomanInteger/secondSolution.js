const validSymbols = ['I','V','X','L','C','D','M'];
const sybmolsValues = 
                        {
                            'I' : 1,
                            'V': 5,
                            'X': 10,
                            'L':50,
                            'C':100,
                            'D':500,
                            'M':1000
                        };


const exceptions = {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
}

// Exceptions Array
const exceptionsArr = Object.keys(exceptions);

// EXCEPTIONS VALUES 
let exceptionsValues = [];

// DEFINING OUR FUNCTION 
function romanToInteger(romNum) {
    let totall,j;
    let execptionsSum = 0;
    let normalSum = 0;
    let tempPair;
    let exceptionsIndexes = [];

    // CALCULATING THE SUM OF EXCEPTIONS
    for(let i = 0; i < romNum.length - 1; i++){
        j = i + 1;
        tempPair = romNum[i] + romNum[j];
        if(exceptionsArr.includes(tempPair)){
            exceptionsIndexes.push(i,j);
            execptionsSum += exceptions[tempPair];
        } 
    }

//CALCULATING THE NORMAL SUM
    for(let i = 0; i < romNum.length; i++) {
        if(! exceptionsIndexes.includes(i)) {
            normalSum += sybmolsValues[romNum[i]];
        }
    }

// CALCULATING THE TOTALL
totall = normalSum + execptionsSum;
console.log(totall);
return totall;
}

romanToInteger('CMXCIVM');