// Problem: Merge Overlapping Delivery Windows

// Amazon's logistics team schedules delivery time windows for drivers. Due to overlapping bookings, some windows need to be merged into a 
// single continuous window. Given an array of delivery windows, where each window is represented as [start, end], 
// merge all overlapping windows and return an array of the merged, non-overlapping windows.

// Two windows [a, b] and [c, d] overlap if they share any time in common (including touching endpoints, e.g., [1,3] and [3,5] 
// should merge into [1,5]).

// Constraints
// 1 <= windows.length <= 10^4
// windows[i].length == 2
// 0 <= start <= end <= 10^9
// The input array is not guaranteed to be sorted
// Example 1
// Input: windows = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: [1,3] and [2,6] overlap (2 falls within [1,3]) → merge into [1,6].
// Example 2
// Input: windows = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Windows touch at 4, which counts as overlapping → merge into [1,5].
// Example 3
// Input: windows = [[1,4],[0,4]]
// Output: [[0,4]]
// Example 4
// Input: windows = [[1,4],[2,3]]
// Output: [[1,4]]
// Explanation: [2,3] is entirely contained within [1,4] → still just one merged window.

function mergeInterval(array){
    array.sort((a,b)=> a[0] - b[0]);
    const merged = [];

    for(const intervals of array){
        if(merged.length === 0 || merged[merged.length - 1][1] < intervals[0]){
            merged.push(intervals)
        }
        else{
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1],intervals[1])
        }
    }
    return merged;
}

console.log(mergeInterval([[1,3],[2,6],[8,10],[15,18]]));


