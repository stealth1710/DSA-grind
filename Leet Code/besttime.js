
//more OPtimised and correct solution

function bestTime(arr){
    let mininmumSeen = arr[0];
    let maximumProfit = 0;

    for(let i = 1; i < arr.length ;i++){

        const profit = arr[i] - mininmumSeen;
        
        if(profit > maximumProfit){
            maximumProfit = profit
        }

        if(arr[i]<mininmumSeen){
            mininmumSeen = arr[i]
        }
    }
    return maximumProfit;
}

const array = [7,1,5,3,6,4]


console.log(bestTime(array));
