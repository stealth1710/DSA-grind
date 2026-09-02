// Problem: Minimum Warehouse Boxes to Remove (Majority Element)

// Amazon's warehouse sorting system labels boxes by category. Due to a sorting error, 
// boxes need to be re-organized, and the system wants to quickly identify which category dominates a given batch. 
// Given an array of box category labels, find the category label that appears more than n/2 times (where n is the length of the array). 
// You are guaranteed that such a majority element always exists in the input.

// Constraints
// 1 <= labels.length <= 10^5
// labels[i] is an integer
// A majority element is guaranteed to exist
// Example 1
// Input: labels = [2, 2, 1, 1, 1, 2, 2]
// Output: 2
// Explanation: 2 appears 4 times out of 7 total elements. 4 > 7/2 (3.5), so 2 is the majority.
// Example 2
// Input: labels = [3, 3, 4]
// Output: 3
// Explanation: 3 appears 2 times out of 3 total. 2 > 3/2 (1.5), so 3 is the majority.
// Example 3
// Input: labels = [7]
// Output: 7
// Explanation: Single element is trivially the majority.

function findMajority(array){
    const counts = new Map();
    const n = array.length;

    for(let i =0; i < n ; i++){
        counts.set(array[i],(counts.get(array[i])||0) + 1);

        if(counts.get(array[i]) > n/2){
        return array[i]
    }
    }
    
    
}

console.log(findMajority([2, 2, 1, 1, 1, 2, 2]));
