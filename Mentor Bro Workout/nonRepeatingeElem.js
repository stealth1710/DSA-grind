function firstNonRepeatingElem(array){
    const visited = new Map(); //storing the elements and their counts in a map ds

    for(const num of array){ //using for of loop as to extract the values of the contained in the array rather than their indexes
        if(visited.has(num)){ //if the key/number in the array is already existing, update the count 
            visited.set(num,visited.get(num) + 1) 
        }
        else{
            visited.set(num,1) //setting the value in the ds as key and the count as their value
        }
    }
    //looping through the array once more to get the first element in the array

    for(const num of array){
        if(visited.get(num) === 1){
            return num
        }
    }
}
//

const array = [2,2,9,8,0];

console.log(firstNonRepeatingElem(array));
