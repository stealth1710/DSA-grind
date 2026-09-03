function merge(array){
    if(array.length < 2 ){
        return array
    }

    let middle = Math.floor(array.length / 2)
    let left = array.slice(0,middle);
    let right = array.slice(middle);
    
    return mergeSort(merge(left),merge(right));

}

function mergeSort(leftArr,rightArr){
    const sortedArray = [];

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

const array = [12,2,34,7,8,9];

console.log(merge(array));
