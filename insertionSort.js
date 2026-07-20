function insertionSort(arr){
    for(let i =1;i<arr.length;i++){
        let numberToInsert = arr[i];
        let j = i - 1 //left index of the sorted element

        while(j>=0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j];
            j = j - 1
        }
        arr[j+1] = numberToInsert;
    }
}

const array = [0,20,-2,4,-6]
insertionSort(array);

console.log(array);

