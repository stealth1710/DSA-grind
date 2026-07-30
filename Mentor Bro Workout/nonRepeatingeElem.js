function firstNonRepeatingElem(array){
    const visited = new Map();

    for(const num of array){
        if(visited.has(num)){
            visited.set(num,visited.get(num) + 1)
        }
        else{
            visited.set(num,1)
        }
    }

    for(const num of array){
        if(visited.get(num) === 1){
            return num
        }
    }
}

const array = [2,2,9,8,0];

console.log(firstNonRepeatingElem(array));
