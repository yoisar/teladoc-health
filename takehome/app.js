// return true if n is a float number
const isFloat = (n => {
    return Number(n) === n && n % 1 !== 0;
});
// decimals for floats
const decimals = 4;
// the function addNumbers
const addNumbers = (firstString, secondString) => {

    try {
        /**
         * - Prepare lists of numbers for each string. 
         * - Eliminates white spaces at the beginning and end of each string. 
         * - To return each number separately the MAP function is used
         */
        let listA = firstString.trim().split(' ').map(str => Number(str));
        let listB = secondString.trim().split(' ').map(str => Number(str));
        /**
         * - Compare size of each list. In case of not coinciding, return error message 
         */
        if (listA.length == listB.length) {
            // - save the final result
            let finalString = '';
            //save the result of pair sum of built-in high precision BigInt
            let sumResulInt;
            //save the float result of pair sum
            let sumResulFloat;
            const length = listA.length;
            //loop lists
            for (let index = 0; index < length; index++) {
                //number from first string
                const numberA = listA[index];
                //number from second string
                const numberB = listB[index];
                //is any number is float
                if (isFloat(numberA) || isFloat(numberB)) {
                    //sum float numbers
                    sumResulFloat = parseFloat(numberA.toString()) + parseFloat(numberB.toString());
                    finalString += ` ${sumResulFloat.toFixed(decimals)} `;
                } else {
                    //sum of built-in high precision BigInt
                    sumResulInt = BigInt(numberA + numberB);
                    finalString += ` ${sumResulInt} `;
                }
            }
            //return results
            console.log(finalString);
        } else {
            //show an error
            console.log('You must have the same numbers amount. Please check that');
        }
    } catch (error) {
        //catch unexpected error
        console.log(` Ops!  there is an error with "${firstString}" and "${secondString}"`);
        console.log(` ${error}`);
    }

}

// Examples:
// should return "134 478 822".
addNumbers("123 456 789", "11 22 33");
// should return "123456789012358024579 234567890123480245801".
addNumbers("123456789012345678901 23456789", "12345678 234567890123456789012");
// should return "1234580.2301 2345678903.545".
addNumbers("1234567.8901 2.345", "12.34 2345678901.2");
//with spaces
addNumbers("2345 456 789", "777 22 555 ");
// float val
addNumbers("1234567.8901 2.345 ", "12.34 2345678901.2");
//with not a number
addNumbers("123 456 fff", "11 22 33");
//long long number
const bigNumA = "123422222222222222222222222222222222222";
const bigNumB = "12342222222222222222222222222222226777232";

addNumbers(bigNumA, bigNumB);
