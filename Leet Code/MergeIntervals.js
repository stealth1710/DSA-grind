function mergeInterval(array){

    array.sort((a,b)=> a[0] - b[0]);
    
    const merged = [];

    for(const intervals of array){

        //if  it the values does not overlap

        if(merged.length === 0 || merged[merged.length - 1][1] < intervals[0])
        {
            merged.push(intervals)
        }
        //if overlap happens
        else{
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1],intervals[1])
        }
    }
    return merged;

}

const array = [[4,7],[1,4]];

// console.log(array[0][0]);

console.log(mergeInterval(array));
