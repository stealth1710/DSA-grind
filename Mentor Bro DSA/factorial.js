function factorial(n){
    let sum = 1;
    for (let i = 2;i<=n; i++){
        sum = sum * i;
    }
    return sum;
}
console.log(factorial(5));

// Big O = O(n)
 