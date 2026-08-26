// Problem: Longest Substring Without Repeating Characters (Tracking Codes)

// Amazon's shipment tracking system generates tracking codes as a continuous string of characters. 
// Due to a logging glitch, some characters got concatenated together without separators. 
// Given a string representing a sequence of tracking code characters, 
// find the length of the longest substring that contains no repeating characters.

// Constraints
// 0 <= s.length <= 5 * 10^4
// s consists of English letters, digits, symbols, and spaces (ASCII characters)
// Example 1
// Input: s = "PWWKEW"
// Output: 3
// Explanation: The longest substring without repeating characters is "WKE", with length 3.
// Example 2
// Input: s = "BBBBB"
// Output: 1
// Explanation: The longest substring without repeating characters is "B", with length 1.
// Example 3
// Input: s = "ABCABCBB"
// Output: 3
// Explanation: The longest substring without repeating characters is "ABC", with length 3.
// Example 4
// Input: s = ""
// Output: 0
// Explanation: Empty string has no substrings.
// Example 5
// Input: s = "AB12AB12"
// Output: 4
// Explanation: "AB12" is the longest substring without repeats, length 4.

function longest(string){
    //keeping the datas in a set to avoid the duplicates
    const charSet = new Set();

    //we use sliding window approach for this problem, the window shrinks if the condition is  met  
    let left = 0;

    //keeping track of the max length to update and return it
    let maxLength = 0; 
    
    //looping through the string
    for(let right = 0; right < string.length ; right ++){
        while(charSet.has(string[right])){ 
            charSet.delete(string[left]);
            left++

        }
        charSet.add(string[right]);
        maxLength = Math.max(maxLength,right-left+1)
    }
    return maxLength;
}

console.log(longest("ABCABCBB"));
