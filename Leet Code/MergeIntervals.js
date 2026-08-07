function mergeInterval(array){
    array.sort((a,b)=> a[0] - b[0]);
}

const array = [[1,3],[6,8],[1,5]];

// console.log(array[0][0]);

console.log(array.sort((a,b)=> a[0] - b[0]));
