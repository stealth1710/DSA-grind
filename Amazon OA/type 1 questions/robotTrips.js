// Problem: Robot Package Delivery

// Amazon's warehouse robot needs to move all packages from the storage area to the loading dock. The robot can carry multiple packages per trip, but the total weight per trip cannot exceed its maximum capacity k. To keep things efficient, each trip carries at most 2 packages (this is the standard constraint in the OA version — otherwise it's a much harder bin-packing problem).

// Given an array weights representing the weight of each package, and an integer k representing the robot's max capacity per trip, return the minimum number of trips required to move all packages.

// Constraints
// 1 <= weights.length <= 10^5
// 1 <= weights[i] <= k
// 1 <= k <= 10^9

// Input: weights = [3, 5, 3, 4], k = 5
// Output: 4
// Explanation: 
//   - 5 alone (5 = 5)
//   - 4 alone (4 ≤ 5, but 4+3=7 > 5)
//   - 3 alone
//   - 3 alone

// Input: weights = [1, 2, 2, 3], k = 3
// Output: 3
// Explanation:
//   - Trip 1: 1 + 2 = 3
//   - Trip 2: 2 alone
//   - Trip 3: 3 alone

// Input: weights = [3, 2, 2, 1], k = 3
// Output: 3


//we do a two pointer greedy approach for the problem

function moveRobot(array,k){

    let sortedArray =  array.sort((a,b) => a-b)
    let left = 0;
    let right = array.length - 1 ;
    let rounds = 0 ;


    while(left < right){
        if(sortedArray[left] + sortedArray[right] <= k){
            left ++ ;
        }

        right-- ;
        rounds++ ;
    }

    return rounds ;

}

console.log(moveRobot([3,3,2,1],3));
