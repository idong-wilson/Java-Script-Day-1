//==================Exercise #1 ==========//
/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/


let exerciseOneArr = [1, 2, 3, 5, 6, 7]

// All the numbers except one are in progression of common difference
// Look for the the one that violates the rule (the exception)

let theException = (arr) => {
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i+1] - arr[i] !== 1){
            return i+1;
        };
    };
    return -1;
};
console.log(theException(exerciseOneArr));




//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/

let numbers1 = [10, 12, -9, 3, -1, 0, 15] 


let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1] 


let sumPositive = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; ++i) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    return sum;
};

console.log(sumPositive(numbers1));
console.log(sumPositive(numbers2));