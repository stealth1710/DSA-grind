// Problem: Alexa Word Frequency

// Amazon's Alexa team wants to analyze voice commands to understand usage patterns. 
// Given a string representing a transcript of words spoken to Alexa in a single session, 
// and an integer k, return the k most frequently spoken words.

// If two or more words have the same frequency,
//  they should be ordered alphabetically among themselves. 
// The final result should be sorted primarily by frequency (descending), then alphabetically for ties.

// Constraints
// 1 <= transcript.length <= 10^5
// transcript consists of lowercase words separated by single spaces
// 1 <= k <= number of unique words in transcript


// Example 1
// Input: transcript = "play music play stop play", k = 2
// Output: ["play", "music"]
// Explanation: "play" appears 3 times, "music" and "stop" each appear once. 
// "music" comes before "stop" alphabetically, so it's chosen as the runner-up.


// Example 2
// Input: transcript = "alexa stop alexa play alexa play music stop", k = 3
// Output: ["alexa", "play", "stop"]
// Explanation: 
//   alexa: 3, play: 2, stop: 2, music: 1
//   Top 3 by frequency: alexa(3), then play and stop tie at 2 → alphabetical → play before stop
// Example 3
// Input: transcript = "hello", k = 1
// Output: ["hello"]


function alexaWords(array,k){
    //will come back to it
    
}

console.log(alexaWords(['play','hard','play'],2));
