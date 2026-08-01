
//sorting using normal inbuilt method
function sorting(arr){
    const sortedArray = arr.sort( (a,b)=> a-b);
    return sortedArray;
}

function bubbleSort(arr){
    //brute force approach
    let swapped;

    do{
        swapped = false;

        for(let i = 0; i < arr.length -1  ; i++){
            if(arr[i] > arr [i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true
            }
        }

    }
    while(swapped){
        return arr
    }
        

}

function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }

    const middle = Math.floor((arr.length / 2));

    const leftArr = arr.slice(0,middle);
    const rightArr = arr.slice(middle);

    return merge(mergeSort(leftArr),mergeSort(rightArr));
}

function merge(left,right){

    const sortedArray = []
    while(left.length && right.length){
        if(left[0] <= right [0]){
            sortedArray.push(left.shift())
        }
        else{
            sortedArray.push(right.shift())
        }
    }

    return [...sortedArray,...left,...right];
}

function quickSort(arr){

    if(arr.length<2){
        return arr;
    }

    const pivot = arr[0];

    const left = [];
    const right = [];

    for(let i = 1; i < arr.length  ; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }

    }

    return [...quickSort(left),pivot,...quickSort(right)]
}

//function calls
const array = [13,4,1,-3,6];


console.log(quickSort(array));

