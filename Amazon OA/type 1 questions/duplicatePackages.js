// Problem: Duplicate Package Scan Detector

// Amazon's warehouse scanning system flags potential errors when the same package ID is scanned twice within a 
// short distance of each other in the scan log (this usually indicates a duplicate/erroneous scan rather than two different events). 
// Given an array of package IDs representing the order they were scanned, and an integer k, determine if there exist two equal package IDs 
// whose index distance is at most k.

// Formally: return true if there exist indices i and j such that array[i] === array[j], i !== j, and |i - j| <= k.

// Constraints
// 1 <= ids.length <= 10^5
// 0 <= ids[i] <= 10^9
// 0 <= k <= ids.length
// Example 1
// Input: ids = [1, 2, 3, 1], k = 3
// Output: true
// Explanation: ids[0] = ids[3] = 1, and |0 - 3| = 3 <= k = 3.
// Example 2
// Input: ids = [1, 2, 3, 1, 2, 3], k = 2
// Output: false
// Explanation: The two 1s are at indices 0 and 3 (distance 3), too far apart for k = 2. Same for 2 and 3.
// Example 3
// Input: ids = [1, 0, 1, 1], k = 1
// Output: true
// Explanation: ids[2] = ids[3] = 1, and |2 - 3| = 1 <= k = 1.
// Example 4
// Input: ids = [99], k = 0
// Output: false
// Explanation: Only one element, no pair exists.


function duplicatePackageWithinRange(array,k){
    const seen = new Set();
    for(let i = 0; i<array.length;i++){
        if(seen.has(array[i])){
            return true;
        }

        seen.add(array[i]);

        if(seen.size > k){
            seen.delete(array[i-k])
        }
    }

    return false;
 
}

console.log(duplicatePackageWithinRange([1, 0, 1, 1],1));
console.log(duplicatePackageWithinRange([99],0));


