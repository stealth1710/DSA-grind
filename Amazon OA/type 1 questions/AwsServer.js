// Problem: AWS Server Utilization

// Amazon's AWS infrastructure team monitors server load every minute. 
// Given an array representing the server's load percentage over time, and a threshold k, 
// they want to find the longest streak of consecutive minutes during which the server load stayed strictly below the threshold k.
//  This helps identify healthy, low-congestion windows for scheduling maintenance or batch jobs.

// Return the length of the longest such streak.

// Constraints
// 1 <= load.length <= 10^5
// 0 <= load[i] <= 100
// 0 <= k <= 100
// Example 1
// Input: load = [3, 5, 2, 1, 6, 4], k = 5
// Output: 2
// Explanation: 
//   Values below 5: [3], [2,1], [4]
//   Longest streak of consecutive minutes below 5 is [2, 1], length 2.
// Example 2
// Input: load = [1, 2, 3, 4, 5], k = 10
// Output: 5
// Explanation: All values are below 10, so the entire array is one streak.
// Example 3
// Input: load = [10, 20, 30], k = 5
// Output: 0
// Explanation: No value is below 5.



function threshold(array,k){
    let currentStreak = 0;
    let bestStreak = 0;

    for(let i = 0;i<array.length ; i++){
        if(array[i] < k){
            currentStreak ++;
            bestStreak = Math.max(bestStreak,currentStreak)
        }

    }
    return bestStreak
}

console.log(threshold([10, 20, 30],11));
