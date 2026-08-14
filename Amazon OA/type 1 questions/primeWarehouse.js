// Problem: Prime Warehouse Distance

// Amazon operates several warehouses along a single delivery corridor,
//  each located at a specific distance marker from the central hub. 
// To optimize inter-warehouse transfers, 
// Amazon wants to find the two warehouses that are closest to each other 
// (i.e., the pair with the minimum absolute difference in their distance markers).


// Given an array of integers representing the distance markers of each warehouse, 
// return the minimum absolute difference between any two distinct warehouses.

// Constraints
// 2 <= distances.length <= 10^5
// -10^9 <= distances[i] <= 10^9
// Warehouses may share the same distance marker (difference of 0 is possible)
// Example 1
// Input: distances = [10, 5, 3, 8, 20]
// Output: 2
// Explanation: The closest pair is (3, 5) or (8, 10), both with a difference of 2.
// Example 2
// Input: distances = [1, 5, 9]
// Output: 4
// Example 3
// Input: distances = [4, 4, 7]
// Output: 0
// Explanation: Two warehouses share the same distance marker.
// Follow-up (sometimes tacked on in the OA)


function minDiff(array){
    const sortedArray = array.sort((a,b)=> a - b )
    console.log(sortedArray);
    
    let minDiff = Infinity;
    for(let i = 1; i < sortedArray.length;i++){
        const diff = sortedArray[i] - sortedArray[i-1];
        if(diff < minDiff){
            minDiff = diff
        }
    }
    return minDiff;

}

console.log(minDiff([5,5,6,6,7]));
