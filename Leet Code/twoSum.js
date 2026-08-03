//Leet code 1
//two sum using javascript



function twoSum(arr,target){
    const visited = new Map();

    for (let i = 0; i<arr.length ; i++){
        let difference = target - arr[i];
        
        if(visited.has(difference)){
            return [difference,arr[i]]
        }

        visited.set(arr[i],i)
    } 

    return null;
}

const array = [1,5,6,2];

const target = 3;

console.log(twoSum(array,target));
