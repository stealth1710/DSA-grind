function quickSort(arr){
    //base case

    if(arr.length<2){
        return arr;
    }

    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];

    for (let i = 0; i<arr.length-1 ;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }


    return [...quickSort(left),pivot,...quickSort(right)] //now we have recursion so recursion needs base case


}   

const array = [0,30,-2,-5];

console.log(quickSort(array));

