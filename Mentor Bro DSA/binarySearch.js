function binarySearch(arr,target){
    let sortedArray = arr.sort((a,b)=>a-b);
    let left = 0
    let right = sortedArray.length -1

    while(left <= right){
        let middle = Math.floor((left+right)/2)
        if(target === sortedArray[middle]){
            return middle;
        }
        if(target<sortedArray[middle]){
            right = middle - 1;
        }
        else{
            left = middle + 1;
        }
    }
    return -1;
}

console.log(binarySearch([-5,2,4,10,6],10));
console.log(binarySearch([-5,2,4,6,10],6));
console.log(binarySearch([-5,2,4,6,10],20));