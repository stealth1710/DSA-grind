// Amazon customer support processes gift card refunds. A customer complains that two of their gift cards, when combined, 
// should total exactly a specific refund amount, but they can't remember which two cards. Given an array of gift card balances and a 
// target refund amount, find the indices of the two gift cards whose balances sum exactly to target.

// You may assume each input has exactly one solution, and you may not use the same card twice.

// Constraints
// 2 <= balances.length <= 10^5
// -10^9 <= balances[i] <= 10^9
// -10^9 <= target <= 10^9
// Exactly one valid pair exists
// Example 1
// Input: balances = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: balances[0] + balances[1] = 2 + 7 = 9
// Example 2
// Input: balances = [3, 2, 4], target = 6
// Output: [1, 2]
// Example 3
// Input: balances = [3, 3], target = 6
// Output: [0, 1]


function giftCard(array,target){
    let visited = new Map();

    for(let i = 0;i<array.length;i++){
        let difference = target - array[i]
        
        if(visited.has(difference)){
            return[visited.get(difference),i]
        }

        visited.set(array[i],i)
    }
    
}

console.log(giftCard([11, 7, 2, 15],9));
