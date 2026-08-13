function mergeSort(arr){

    if(arr.length<2){
        return arr
    }
    
    const middle = Math.floor(arr.length/2); 
    const leftArr = arr.slice(0,middle);
    const rightArr = arr.slice(middle);
    return merge(mergeSort(leftArr),mergeSort(rightArr))

}

function merge(leftArr,rightArr){
    const sortedArray = []

    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArray.push(leftArr.shift())
        }
        else{
            sortedArray.push(rightArr.shift())
        }
    }

    return [...sortedArray,...leftArr,...rightArr]
}

const arr = [0,20,-2,4,-6];

console.log(mergeSort(arr));

