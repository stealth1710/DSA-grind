//two sum problem
//find if two pairs in the array sums up to the target
//use hashing for the implementation

function twoSum(arr,target){
    const visited = {};

    for(let i = 0; i <arr.length;i++){
        const difference = target - arr[i];
        if(difference in visited ){
            return[difference,arr[i]]
        }
        visited[arr[i]] = true;
    }
    return false

}


const array = [1,5,7,8] ;

const target = 10;

console.log(twoSum(array,target));
