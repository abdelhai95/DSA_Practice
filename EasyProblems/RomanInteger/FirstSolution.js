// Valid letters 
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






function romanToInteger(romNum) {
    // Check if the number is less than 16 characters
    if(romNum.length < 15) {
        let res = 0;
        let temp;


    // Deploy Sliding window to check for exceptions
    for(let i = 0; i < romNum.length; i++){
        let window = romNum[i] + romNum[i+1];
        if(exceptionsArr.includes(window)) {
            console.log('here');
        }
    }


    //     for (const index in romNum) {
    //         let charc = romNum[index];
    //         let previous = romNum[index - 1]
    //         temp = sybmolsValues[romNum[0]];
            
    //         // console.log(sybmolsValues[charc], sybmolsValues[previous])
    //        if( (sybmolsValues[charc] > sybmolsValues[previous]) && index === 1) {
    //             let twoCurrents = previous + charc;
    //             if(exceptionsArr.includes(twoCurrents)) {
    //                 res += exceptions[twoCurrents]; 
    //             }
    //             // console.log(exceptionsArr);
                
    //        }
    //         //CHECK IF CHARACTER IS VALID 
    //        if((index > 0) && (sybmolsValues[charc] <= sybmolsValues[previous])) {
    //         console.log(sybmolsValues[charc],sybmolsValues[previous]);
    //          res += sybmolsValues[charc]; 

    //        } 
    //     }
        
        
    //     res += temp;
    //     // console.log(res)
    //     // console.log(res);
    //         // CHECK FOR THE CORRECT FORM OF ROMAN NUMBERS WHICH IS GOING FROM BIGGEST TO SMALLEST NUMBER
            
    //         // RETURNED INTEGER NUMBER
    //         // res += SybmolsValues[charc];
    //         // console.log(res);
    }
    
    
}

romanToInteger('IX');