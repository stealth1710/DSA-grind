function cartesian(firstArray,secondArray){
    const productArray = []

    for (let i = 0;i<firstArray.length;i++){
        for(let j =0;j<secondArray.length;j++){
            productArray.push([firstArray[i],secondArray[j]]);
        }
    }
    return productArray;
}

const arr1 = [1,2]
const arr2 = [3,4,5,5,6]

console.log(cartesian(arr1,arr2));
