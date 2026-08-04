function containsDuplicate(nums){
    let visited = new Map();
    //using hash table for easy look up
    for(let i = 0; i <nums.length; i++){
        if(visited.has(nums[i])){
            return true;
        }
        visited.set(nums[i],i)
    }
    return false;
}

const array = [1,3,4];

console.log(containsDuplicate(array));
