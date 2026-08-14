//Problem: Amazon Order Frequency
//Amazon's order processing system logs the order ID every time a package is scanned during processing
// (an order can be scanned multiple times as it moves through different stages). 
// Given an array of order IDs processed throughout the day, find the order ID that was scanned the most frequently.
//  If there's a tie for the highest frequency, return the smallest order ID among the tied ones.

//Constraints
// 1 <= orderIds.length <= 10^5
// 1 <= orderIds[i] <= 10^9

// Example 1
// Input: orderIds = [4, 5, 6, 5, 4, 3, 4]
// Output: 4
// Explanation: 4 appears 3 times (most frequent), 5 appears 2 times, 6 and 3 appear once.

//Example 2
// Input: orderIds = [7, 7, 8, 8, 9]
// Output: 7
// Explanation: 7 and 8 both appear 2 times (tied). Return the smaller ID, 7.





function orderId(array){
    //setting up the map
    const counts = new Map();

    for(let i = 0;i<array.length;i++){

        if(counts.has(array[i])){
            counts.set(array[i],counts.get(array[i])+1)
        }
        else{
            counts.set(array[i],1)
        } 
    }
    //returning the id with most occurences and if they are equal
    let bestCount = 0;
    let bestId = array[0];

    for(const [id,count] of counts){
        if(count > bestCount || (count === bestCount && id < bestId) ){
            bestCount = count ;
            bestId = id;
        }
    }

    return bestId;
    

}

console.log(orderId([5]));
