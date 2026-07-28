function reverseArray(arr){
    const reversedArray = []
    for(let i = arr.length-1 ; i>=0 ;i--){
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

const array = [1,3,44,5,"hello"];

console.log(reverseArray(array));
