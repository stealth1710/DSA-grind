// Problem: Anagram Order Matching

// Amazon's order confirmation system generates a confirmation code for every order. Due to a bug, some codes get scrambled during transmission. Given two strings representing an original confirmation code and a possibly-scrambled version, determine whether the two strings are anagrams of each other — meaning they contain exactly the same characters with exactly the same frequencies, just possibly in a different order.

// Return true if they are anagrams, false otherwise.

// Constraints
// 1 <= s1.length, s2.length <= 5 * 10^4
// s1 and s2 consist of lowercase English letters only
// Example 1
// Input: s1 = "listen", s2 = "silent"
// Output: true
// Explanation: Both strings contain exactly: l, i, s, t, e, n (one of each).
// Example 2
// Input: s1 = "hello", s2 = "world"
// Output: false
// Explanation: Different character frequencies (e.g., 'l' appears twice in "hello", once in "world"; 'h' isn't in "world" at all).
// Example 3
// Input: s1 = "aabbcc", s2 = "abcabc"
// Output: true
// Example 4
// Input: s1 = "aa", s2 = "a"
// Output: false
// Explanation: Different lengths automatically means they can't be anagrams (a good early exit check).

function anagramCheck(s1,s2){
    const map = new Map()
    

    if(s1.length != s2.length){
        return false;
    }
    else{
        for(let i = 0; i<s1.length;i++){
            map.set(s1[i],(map.get(s1[i]) || 0) + 1);
            
        }
        for(let i = 0; i< s2.length ; i++){
            if(!map.has(s2[i])|| map.get(s2[i]) === 0){
                return false;
            }

            map.set(s2[i],map.get(s2[i]) - 1);
        }
    }
    return true;
}

console.log(anagramCheck('aab','abb'));
