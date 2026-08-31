// gimmme the next question

// Problem: Best Time to Buy/Sell Amazon Stock
// You're given an array representing Amazon's stock price on each day (index = day number, value = price that day).
//  You're allowed to make at most one transaction — buy on one day and sell on a later day. Find the maximum profit you can achieve. 
// If no profit is possible, return 0.

// Note: you must buy before you sell (you can't sell on a day before you've bought).

// Constraints
// 1 <= prices.length <= 10^5
// 0 <= prices[i] <= 10^4
// Example 1
// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 1 (price = 1), sell on day 4 (price = 6). Profit = 6 - 1 = 5.
// Example 2
// Input: prices = [7, 6, 4, 3, 1]
// Output: 0
// Explanation: Prices only decrease — no way to make a profit, so best is to not transact at all.
// Example 3
// Input: prices = [1, 2]
// Output: 1
// Explanation: Buy at 1, sell at 2.
// Example 4
// Input: prices = [2, 4, 1, 7]
// Output: 6
// Explanation: Buy at 1 (day 2), sell at 7 (day 3). Profit = 6. (Note: buying at 2 and selling at 4 only gives profit 2, which is worse.)


function bestTime(prices){
    let maxProfit = 0
    let mininmumSeen = prices[0]

    for (let i = 0; i<prices.length; i++){

        let profit = prices[i] - mininmumSeen

        if(profit > maxProfit){
            maxProfit = profit;
        }

        if(prices[i] < mininmumSeen){
            mininmumSeen = prices[i]
        }
    }
    return maxProfit
    
}

console.log(bestTime([2, 4, 1, 7]));
console.log(bestTime([1, 2]));
console.log(bestTime([7, 6, 4, 3, 1]));
console.log(bestTime([7, 1, 5, 3, 6, 4]));

