// Problem: Amazon Return Window Validator

// Amazon's customer service team needs to quickly determine how many purchases are still eligible for return. 
// Each purchase has a timestamp (the day it was made, as an integer day count). 
// Given an array of purchase timestamps and a return window w (in days), along with the current day today, 
// determine how many purchases are still eligible for return.

// A purchase is eligible if the number of days elapsed since purchase is less than or equal to the return window:

// today - purchaseDay <= w

// Return the count of eligible purchases.

// Constraints
// 1 <= purchases.length <= 10^5
// 1 <= purchases[i] <= 10^9
// 1 <= today <= 10^9
// 0 <= w <= 10^9
// purchases[i] <= today for all valid inputs (no purchase happens in the future)
// Example 1
// Input: purchases = [1, 5, 10, 20], today = 22, w = 15
// Output: 2
// Explanation:
//   day 1:  22 - 1  = 21 > 15 → not eligible
//   day 5:  22 - 5  = 17 > 15 → not eligible
//   day 10: 22 - 10 = 12 <= 15 → eligible
//   day 20: 22 - 20 = 2  <= 15 → eligible
//   Total eligible: 2
// Example 2
// Input: purchases = [10, 10, 10], today = 10, w = 0
// Output: 3
// Explanation: All purchases made "today" (0 days elapsed) are eligible when w = 0.
// Example 3
// Input: purchases = [1, 2, 3], today = 100, w = 5
// Output: 0
// Explanation: All purchases are far outside the return window.

function isEligible(array,today,window){
    let eligibleReturn = 0;

    for(let i = 0;i< array.length;i++){
        if (today - array[i] <= window){
            eligibleReturn ++;
        }
    }
    return eligibleReturn;
}

console.log(isEligible([1, 5, 10, 20],22,15));

console.log(isEligible([1, 2, 3],100,5));

console.log(isEligible([10,10,10],10,0));