function binarySearch(arr,target){
    let sortedArray = arr.sort((a,b)=> a - b);

    let left = 0;
    let right = arr.length  - 1;

    

    while (left <= right){
        let middle  = Math.floor((left+right)/2)
        if(target === sortedArray[middle]){
            return true
        }

        if(target > sortedArray[middle]){
            left = middle + 1 
        }
        else{
            right = middle -1
        }
    }
}