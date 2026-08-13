function fibonacciUsingRecursion(n){
    if(n<=2){
        return n
    }
    else{
        return fibonacciUsingRecursion(n-1) + fibonacciUsingRecursion(n-2)
    }

}

console.log(fibonacciUsingRecursion(7));

// time complexity - O(2^n)


