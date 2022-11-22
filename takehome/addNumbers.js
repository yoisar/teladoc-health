// To solve the calculation of high precision numbers I use the library. 
//  https://github.com/mikemcl/bignumber.js/blob/master/bignumber.js

const BigNumber = require('bignumber.js');

// return true if n is a float number
const isFloat = (n => {
    return Number(n) === n && n % 1 !== 0;
});
// check if is  a number
// function isNumber(val) { val = val + ""; if (val.length < 1) return false; if (isNaN(val)) { return false; } else { return true; } }
// //check if is integer
// function isInteger(val) { if (isNumber(val)) { return val % 1 === 0; } else { return false; } }
// 	 digits after the decimal place in the result
// const precision = 4;
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
        if ((listA.length == listB.length)) {
            // - save the final result
            let finalString = '';
            //save the result of pair sum of built-in high precision BigInt
            let sum;
            //save the float result of pair sum
            let sumResulFloat;
            const length = listA.length;
            //loop lists
            for (let index = 0; index < length; index++) {
                // first string number
                let numberA = BigNumber(listA[index]);
                //second string number
                let numberB = BigNumber(listB[index]);
                //
                sum = numberA.plus(numberB);
                // concat string
                finalString += `${sum} `;
            }
            //return resultsƒ
            return finalString.trim();
        } else {
            //show an error
            return `You must have the same numbers amount. Please check "${firstString}" and "${secondString}"`;
        }
    } catch (error) {
        //catch unexpected error
        return ` Ops!  there is an error with "${firstString}" and "${secondString}" ${error}`;

    }

}

module.exports = addNumbers;