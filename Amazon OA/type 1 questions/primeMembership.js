// Problem: Prime Membership Streak

// Amazon wants to identify customers with strong loyalty patterns for a targeted rewards program.
//  Given an array of 0s and 1s representing whether a customer had an active Prime membership each month over a period 
// (1 = active, 0 = inactive), find the length of the longest streak of consecutive months with active membership.

// Constraints
// 1 <= membership.length <= 10^5
// membership[i] is either 0 or 1
// Example 1
// Input: membership = [1, 1, 0, 1, 1, 1, 0, 1]
// Output: 3
// Explanation: The longest run of consecutive 1s is [1,1,1] (indices 3-5), length 3.
// Example 2
// Input: membership = [0, 0, 0]
// Output: 0
// Explanation: No active months at all.
// Example 3
// Input: membership = [1, 1, 1, 1]
// Output: 4
// Explanation: Entire array is one streak.

function consecutiveMembership(array){
    let currentStreak = 0;
    let maxStreak = 0

    for(let i = 0;i < array.length ; i++){
        if(array[i] === 1){
            currentStreak ++;
            maxStreak = Math.max(currentStreak,maxStreak)
        }
        else{
            currentStreak = 0;
        }
    }
    return maxStreak;
}

console.log(consecutiveMembership([1,1,0]));

console.log(consecutiveMembership([1,1,0,1,1,1]));

console.log(consecutiveMembership([1,1,1,1,1]));