function removeDuplicates(arr){
    const noDuplicates = new Set(arr);
    return [...noDuplicates];
}

const array = [1,3,3,4];

console.log(removeDuplicates(array));

